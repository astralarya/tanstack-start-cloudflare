import { createFileRoute } from "@tanstack/react-router";
import { cloudflareHello } from "~/components/cloudflareHello";
import { Test } from "~/start";

export const Route = createFileRoute("/")({
  // server: {
  //   handlers: {
  //     GET: ({ context, next }) => {
  //       context.fromFetch
  //       //      ^?
  //       context.fromServerMw
  //       //      ^?
  //       context.fromIndexServerMw
  //       //      ^?
  //       return next({
  //         context: {
  //           fromGet: true,
  //         },
  //       })
  //     },
  //     POST: ({ context, next }) => {
  //       context.fromFetch
  //       context.fromServerMw
  //       context.fromIndexServerMw
  //       return next({
  //         context: {
  //           fromPost: true,
  //         },
  //       })
  //     },
  //   },
  //   // handlers: ({ createHandlers }) =>
  //   //   createHandlers({
  //   //     GET: {
  //   //       middleware: [testGetMiddleware],
  //   //       handler: ({ context, next }) => {
  //   //         context.fromFetch
  //   //         //      ^?
  //   //         context.fromServerMw
  //   //         //      ^?
  //   //         context.fromIndexServerMw
  //   //         //      ^?
  //   //         context.fromGetMiddleware
  //   //         //      ^?
  //   //         return next({
  //   //           context: {
  //   //             fromGet: true,
  //   //             fromPost: false,
  //   //           },
  //   //         })
  //   //       },
  //   //     },
  //   //     POST: {
  //   //       handler: ({ next }) => {
  //   //         return next({
  //   //           context: {
  //   //             fromGet: false,
  //   //             fromPost: true,
  //   //           },
  //   //         })
  //   //       },
  //   //     },
  //   //   }),
  //   test: (test) => {},
  // },
  loader: () => {
    return cloudflareHello();
  },
  component: Home,
});

function Home() {
  const data = Route.useLoaderData();
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      {data}
    </div>
  );
}
