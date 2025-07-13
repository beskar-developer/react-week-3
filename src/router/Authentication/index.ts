import { ROUTES } from "@/constants/Authentication/router";

import { lazyRoute } from "@shared-vendor/helpers";

const routes: RouteObject[] = [
  {
    path: ROUTES.ROOT_PATH,
    lazy: lazyRoute(() => import("@/views/Authentication/AuthenticationRoot")),
    children: [
      {
        index: true,
        loader: () => redirect(ROUTES.SIGNIN_PATH),
      },
      {
        path: ROUTES.SIGNIN_PATH,
        lazy: lazyRoute(() => import("@/views/Authentication/AuthenticationSignin")),
      },
      {
        path: ROUTES.SIGNUP_PATH,
        lazy: lazyRoute(() => import("@/views/Authentication/AuthenticationSignup")),
      },
    ],
  },
];

export default routes;
