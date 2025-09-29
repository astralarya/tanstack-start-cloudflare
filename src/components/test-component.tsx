import { Canvas, Rect } from "@shopify/react-native-skia";
import {
  drawOffscreen,
  makeOffscreenSurface,
} from "@shopify/react-native-skia/lib/commonjs/headless";

async function drawSkia() {
  const surface = makeOffscreenSurface(32, 32);
  const image = await drawOffscreen(
    surface,
    <Rect color="magenta" rect={{ x: 0, y: 0, width: 20, height: 20 }} />
  );
  return image.encodeToBase64();
}

// const foo = await drawSkia();

export function TestComponent() {
  return (
    <Canvas>
      <Rect color="magenta" rect={{ x: 0, y: 0, width: 20, height: 20 }} />
    </Canvas>
  );
}
