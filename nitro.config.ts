import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineNitroConfig({
  rollupConfig: {
    plugins: [nodeResolve()],
  },
});
