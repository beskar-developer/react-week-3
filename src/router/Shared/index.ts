import { ROUTES } from "@/constants/Shared";
import { ROUTES as AUTHENTICATION_ROUTES } from "@/constants/Authentication";
import { ROUTES as MOVIE_ROUTES } from "@/constants/Movie";

import { Token } from "@shared-vendor/helpers";
import { defineRoute } from "@/helpers";

const redirectToIndexRoute = () => {
  const isAuthenticated = Token.isAuthenticated();

  if (isAuthenticated) return redirect(MOVIE_ROUTES.ROOT_PATH);

  return redirect(AUTHENTICATION_ROUTES.ROOT_PATH);
};

const routes: RouteObject[] = [
  defineRoute({
    path: ROUTES.ROOT_PATH,
    children: [
      defineRoute({
        index: true,
        loader: redirectToIndexRoute,
      }),
    ],
  }),
  defineRoute({
    path: ROUTES.NOT_FOUND_PATH,
    Component: NotFoundPage,
  }),
];

export default routes;
