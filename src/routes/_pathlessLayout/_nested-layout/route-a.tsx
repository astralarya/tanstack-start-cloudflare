import { createFileRoute } from "@tanstack/react-router";
import { TestComponent } from "~/components/test-component";

export const Route = createFileRoute("/_pathlessLayout/_nested-layout/route-a")(
  {
    component: LayoutAComponent,
  }
);

function LayoutAComponent() {
  return (
    <div>
      I'm A!
      <TestComponent />
    </div>
  );
}
