import { ROUTES } from "@/constants/Finance";

import { defineRoute } from "@/helpers";

const routes: RouteObject[] = [
  defineRoute({
    path: ROUTES.ROOT_PATH,
    layout: ROUTES.LAYOUT_NAME,
    authentication: true,
    module: () => import("@/views/Finance/FinanceRoot"),
    children: [
      defineRoute({
        index: true,
        loader: () => redirect(ROUTES.REPORT_PATH),
      }),
      defineRoute({
        path: ROUTES.CATEGORY_PATH,
        module: () => import("@/views/Finance/FinanceCategory"),
      }),
      defineRoute({
        path: ROUTES.TRANSACTION_PATH,
        module: () => import("@/views/Finance/FinanceTransaction"),
      }),
      defineRoute({
        path: ROUTES.REPORT_PATH,
        module: () => import("@/views/Finance/FinanceReport"),
      }),
    ],
  }),
];

export default routes;
