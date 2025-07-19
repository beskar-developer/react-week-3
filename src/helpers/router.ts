/* eslint-disable func-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LoaderFunction } from "react-router";

import router from "@/router";

import { ROUTES as AUTHENTICATION_ROUTES } from "@/constants/Authentication";
import { ROUTES as SHARED_ROUTES } from "@/constants/Shared";

import { lazyRoute, Token } from "@shared-vendor/helpers";

type LoaderParameters = Parameters<LoaderFunction>;
type Route = RouteObject & {
  module?: any;
  authentication?: boolean | "ignore";
  loader?: LoaderFunction;
  layout?: string;
};

const redirectToAuthentication = () => {
  toast.error("لطفا وارد شوید");

  return redirect(AUTHENTICATION_ROUTES.ROOT_PATH);
};

const wrapLoader =
  (loader?: LoaderFunction, authentication?: Route["authentication"]) =>
  (args: LoaderParameters[0], context: LoaderParameters[1]) => {
    const isAuthenticated = Token.isAuthenticated();

    const isIgnored = authentication === "ignore";
    const isAllowed =
      isIgnored || (isAuthenticated && authentication) || (!isAuthenticated && !authentication);

    if (isAllowed) return loader?.(args, context) ?? null;
    else if (!isAuthenticated && authentication) return redirectToAuthentication();
    else if (isAuthenticated && !authentication) return redirect(SHARED_ROUTES.ROOT_PATH);
  };

const wrapRoute = (route: RouteObject, layout: Route["layout"]) => {
  if (!layout) return route;

  return defineRoute({
    module: () => import(`../layouts/${layout}Layout.tsx`),
    children: [route],
  });
};

export function defineRoute({
  module,
  loader,
  authentication = "ignore",
  layout,
  ...routeAttrs
}: Route): RouteObject {
  const wrappedLoader = wrapLoader(loader, authentication);

  const route = {
    loader: wrappedLoader,
    ...(module && { lazy: lazyRoute(module) }),
    ...routeAttrs,
  };

  const wrappedRoute = wrapRoute(route, layout);

  return wrappedRoute;
}

export const logout = () => {
  Token.clear();

  router.navigate(AUTHENTICATION_ROUTES.ROOT_PATH);
};
