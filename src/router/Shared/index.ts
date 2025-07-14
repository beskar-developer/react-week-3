import { ROUTES } from "@/constants/Shared";
import { ROUTES as AUTHENTICATION_ROUTES } from "@/constants/Authentication";

const routes: RouteObject[] = [
  {
    path: ROUTES.ROOT_PATH,
    children: [
      {
        index: true,
        loader: () => redirect(AUTHENTICATION_ROUTES.ROOT_PATH),
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND_PATH,
    Component: NotFoundPage,
  },
];

export default routes;
