import { ROUTES } from "@/constants/Movie";

import { defineRoute } from "@/helpers";

const routes: RouteObject[] = [
  defineRoute({
    path: ROUTES.ROOT_PATH,
    authentication: true,
    layout: ROUTES.LAYOUT_NAME,
    module: () => import("@/views/Movie/MovieRoot"),
    children: [
      defineRoute({
        index: true,
        loader: () => redirect(ROUTES.LIST_PATH),
      }),
      defineRoute({
        path: ROUTES.LIST_PATH,
        module: () => import("@/views/Movie/MovieList"),
      }),
      defineRoute({
        path: ROUTES.DETAILS_PATH,
        module: () => import("@/views/Movie/MovieDetails"),
      }),
    ],
  }),
];

export default routes;
