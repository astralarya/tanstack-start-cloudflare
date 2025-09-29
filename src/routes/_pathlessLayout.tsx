import { Outlet, createFileRoute } from "@tanstack/react-router";
import { LoadSkiaWeb } from "@shopify/react-native-skia/src/web";
import CanvasKitWasm from "node_modules/canvaskit-wasm/bin/full/canvaskit.wasm?url";

export const Route = createFileRoute("/_pathlessLayout")({
  component: LayoutComponent,
  ssr: false,
  beforeLoad: () => LoadSkiaWeb({ locateFile: () => CanvasKitWasm }),
});

function LayoutComponent() {
  return (
    <div className="p-2">
      <div className="border-b">I'm a layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
