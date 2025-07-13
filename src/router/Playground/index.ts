import { lazyRoute } from "@shared-vendor/helpers";

const routes: RouteObject[] = [
  {
    path: "/",
    lazy: lazyRoute(() => import("@/views/Playground/PlaygroundRoot")),
  },
];

export default routes;
