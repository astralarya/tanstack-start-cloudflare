"use client";

import { AlphaType, ColorType, Skia } from "@shopify/react-native-skia";
import {
  drawOffscreen,
  makeOffscreenSurface,
  type SkSurface,
  type SkTypefaceFontProvider,
} from "@shopify/react-native-skia/lib/commonjs/headless";
import { SkImage } from "@shopify/react-native-skia/src/skia/types";
import { type ReactNode } from "react";

export type SkiaCacheStatus = "fetching" | "error";

export interface SkiaContext<T> {
  surface: SkSurface;
  cache: Map<string, SkImage | SkiaCacheStatus>;
  waitlist: Map<string, ((value: SkImage | PromiseLike<SkImage>) => void)[]>;
  lock: boolean;
  queue: (() => void)[];
  width: number;
  height: number;
  scale: number;
  font: SkTypefaceFontProvider;
  meta: T;
}

export interface SkiaSurfaceProps<T> {
  width: number;
  height: number;
  scale?: number;
  font?: Record<string, string | string[]>;
  meta?: T;
}

export async function SkiaSurface<T>({
  width: width_,
  height: height_,
  scale = 1,
  font,
  meta,
}: SkiaSurfaceProps<T>): Promise<SkiaContext<T>> {
  const width = width_ * scale;
  const height = height_ * scale;
  const typefaces = Skia.TypefaceFontProvider.Make();
  async function registerFont(uri: string, family: string) {
    const font_data = await Skia.Data.fromURI(uri);
    const typeface = Skia.Typeface.MakeFreeTypeFaceFromData(font_data);
    if (typeface) {
      typefaces.registerFont(typeface, family);
    }
  }
  if (font) {
    await Promise.all(
      Object.entries(font).map(async ([key, val]) => {
        try {
          if (Array.isArray(val)) {
            return Promise.all(val.map((val_) => registerFont(val_, key)));
          } else {
            return registerFont(val, key);
          }
        } catch {
          return;
        }
      })
    );
  }
  const surface = makeOffscreenSurface(width, height);
  return {
    surface,
    cache: new Map(),
    waitlist: new Map(),
    lock: false,
    queue: [],
    width,
    height,
    scale,
    font: typefaces,
    meta: meta as T,
  };
}

export interface SkiaTextureProps<T> {
  cacheKey: string;
  context: SkiaContext<T>;
  content: (Skia: SkiaContext<T>) => ReactNode;
  clear?: boolean;
}

export async function SkiaTexture<T>({
  cacheKey,
  context,
  clear = true,
  content,
}: SkiaTextureProps<T>) {
  if (context.lock) {
    const promise = new Promise((resolve) =>
      context.queue.push(() => resolve(undefined))
    );
    await promise;
  } else {
    context.lock = true;
  }
  if (context.cache.has(cacheKey)) {
    const value = context.cache.get(cacheKey)!;
    if (value == "error") {
      throw Error("Cache error: " + cacheKey);
    } else if (value == "fetching") {
      const waitlist = context.waitlist.get(cacheKey) ?? [];
      const next = context.queue.shift();
      if (next) {
        queueMicrotask(next);
      } else {
        context.lock = false;
      }
      return new Promise<SkImage>((resolve) => {
        waitlist.push(resolve);
      });
    } else {
      const next = context.queue.shift();
      if (next) {
        queueMicrotask(next);
      } else {
        context.lock = false;
      }
      return value;
    }
  } else {
    context.cache.set(cacheKey, "fetching");
  }
  if (clear) {
    context.surface.getCanvas().clear(Skia.Color("transparent"));
  }
  const image = await drawOffscreen(context.surface, content(context));
  const pixels = image.readPixels(0, 0, {
    width: context.width,
    height: context.height,
    alphaType: AlphaType.Premul,
    colorType: ColorType.RGBA_8888,
  });
  return image;
}
