import { env } from "cloudflare:workers";
import { createServerFn } from "@tanstack/react-start";

export const cloudflareHello = createServerFn().handler(() => env.MY_VAR);
