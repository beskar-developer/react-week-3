import { RouterProvider as Provider } from "react-router";

import router from "@/router";

export const RouterProvider = () => {
  return <Provider router={router} />;
};
