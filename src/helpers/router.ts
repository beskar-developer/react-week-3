/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LoaderFunction } from "react-router";

import { ROUTES } from "@/constants/Authentication";

import { lazyRoute, Token } from "@shared-vendor/helpers";

type LoaderParameters = Parameters<LoaderFunction>;
type Route = RouteObject & {
  module?: any;
  authentication?: boolean;
  loader?: LoaderFunction;
  layout?: string;
};

const wrapLoader = (loader?: LoaderFunction) => (args: LoaderParameters[0], context: LoaderParameters[1]) => {
  const isAuthenticated = Token.getAccessToken();

  if (isAuthenticated) return loader?.(args, context) ?? null;

  toast.error("لطفا وارد شوید");

  return redirect(ROUTES.ROOT_PATH);
};
const wrapRoute = (route: RouteObject, layout: Route["layout"]) => {
  if (!layout) return route;

  return defineRoute({
    module: () => import(`../layouts/${layout}Layout.tsx`),
    children: [route],
  });
};

export const defineRoute = ({
  module,
  loader,
  authentication,
  layout,
  ...routeAttrs
}: Route): RouteObject => {
  const hasLoader = loader ?? authentication;
  const wrappedLoader = authentication ? wrapLoader(loader) : loader;

  const route = {
    ...(module && { lazy: lazyRoute(module) }),
    ...(hasLoader && { loader: wrappedLoader }),
    ...routeAttrs,
  };

  const wrappedRoute = wrapRoute(route, layout);

  return wrappedRoute;
};
