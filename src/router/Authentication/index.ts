import { ROUTES } from "@/constants/Authentication";

import { defineRoute } from "@/helpers";

const routes: RouteObject[] = [
  defineRoute({
    path: ROUTES.ROOT_PATH,
    module: () => import("@/views/Authentication/AuthenticationRoot"),
    authentication: false,
    children: [
      defineRoute({
        index: true,
        loader: () => redirect(ROUTES.SIGNIN_PATH),
      }),
      defineRoute({
        path: ROUTES.SIGNIN_PATH,
        module: () => import("@/views/Authentication/AuthenticationSignin"),
      }),
      defineRoute({
        path: ROUTES.SIGNUP_PATH,
        module: () => import("@/views/Authentication/AuthenticationSignup"),
      }),
    ],
  }),
];

export default routes;
