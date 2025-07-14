/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LoaderFunction } from "react-router";

import { ROUTES } from "@/constants/Authentication";

import { lazyRoute, Token } from "@shared-vendor/helpers";

type LoaderParameters = Parameters<LoaderFunction>;
type Route = RouteObject & {
  module?: any;
  authentication?: boolean;
  loader?: LoaderFunction;
};

const wrapLoader = (loader?: LoaderFunction) => (args: LoaderParameters[0], context: LoaderParameters[1]) => {
  const isAuthenticated = Token.getAccessToken();

  if (isAuthenticated) return loader?.(args, context) ?? null;

  toast.error("لطفا وارد شوید");

  return redirect(ROUTES.ROOT_PATH);
};

export const defineRoute = ({ module, loader, authentication, ...route }: Route) => {
  const hasLoader = loader ?? authentication;
  const wrappedLoader = authentication ? wrapLoader(loader) : loader;

  return {
    ...(module && { lazy: lazyRoute(module) }),
    ...(hasLoader && { loader: wrappedLoader }),
    ...route,
  };
};
