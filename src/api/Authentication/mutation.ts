import type { RefreshTokenResponse, SigninResponse } from "@/types/Authentication";

import { logout } from "@/helpers";
import { defineMutation, Token } from "@shared-vendor/helpers";
import router from "@/router";

import { ROUTES as MOVIE_ROUTES } from "@/constants/Movie";
import { ROUTES } from "@/constants/Authentication";

import { localStorage } from "@shared-vendor/services";
import service from "@/api/Authentication/service";

const onSigninSuccess = ({ accessToken, refreshToken, username, email }: SigninResponse) => {
  Token.setAccessToken(accessToken);
  Token.setRefreshToken(refreshToken);

  localStorage.setItem("USER", { username, email });

  router.navigate(MOVIE_ROUTES.ROOT_PATH);
};
export const useSigninMutation = () => {
  const endPoints = useEndPoints();

  const mutationConfig = defineMutation({
    mutationKey: endPoints.authentication.signin(),
    mutationFn: service.signin,
    onSuccess: onSigninSuccess,
  });

  const mutation = useMutation(mutationConfig);

  return mutation;
};

const onSignupSuccess = () => router.navigate(ROUTES.ROOT_PATH);
export const useSignupMutation = () => {
  const endPoints = useEndPoints();

  const mutationConfig = defineMutation({
    mutationKey: endPoints.authentication.signup(),
    mutationFn: service.signup,
    onSuccess: onSignupSuccess,
  });

  const mutation = useMutation(mutationConfig);

  return mutation;
};

const onRefreshTokenSuccess = ({ accessToken, refreshToken }: RefreshTokenResponse) => {
  Token.setRefreshToken(refreshToken);
  Token.respondAccessToken(accessToken);
};
const onRefreshTokenError = (error: Error) => {
  if ("status" in error && error.status !== 401) return;

  logout();
};
export const useRefreshTokenMutation = () => {
  const endPoints = useEndPoints();

  const mutationConfig = defineMutation({
    mutationKey: endPoints.authentication.refreshToken(),
    mutationFn: service.refreshToken,
    onError: onRefreshTokenError,
    onSuccess: onRefreshTokenSuccess,
  });

  const mutation = useMutation(mutationConfig);

  return mutation;
};

export const useInitRefreshTokenMutation = () => {
  const mutation = useRefreshTokenMutation();

  useEffect(
    () =>
      Token.onRequestAccessToken(() =>
        mutation.mutate({
          refreshToken: Token.getRefreshToken()!,
        }),
      ),
    [],
  );

  return mutation;
};
