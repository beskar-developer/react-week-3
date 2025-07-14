import { ROUTES } from "@/constants/Shared";
import { ROUTES as AUTHENTICATION_ROUTES } from "@/constants/Authentication";

import { defineRoute } from "@/helpers";

const routes: RouteObject[] = [
  defineRoute({
    path: ROUTES.ROOT_PATH,
    children: [
      defineRoute({
        index: true,
        loader: () => redirect(AUTHENTICATION_ROUTES.ROOT_PATH),
      }),
    ],
  }),
  defineRoute({
    path: ROUTES.NOT_FOUND_PATH,
    Component: NotFoundPage,
  }),
];

export default routes;
