import type { RefreshTokenResponse, SigninResponse } from "@/api/Authentication/type";

import { Token } from "@shared-vendor/helpers";

import { MUTATION_KEYS } from "@/constants/Authentication";

import service from "@/api/Authentication/service";

const onSigninSuccess = ({ accessToken, refreshToken }: SigninResponse) => {
  Token.setAccessToken(accessToken);
  Token.setRefreshToken(refreshToken);
};
const SIGNIN_MUTATION_CONFIG = {
  mutationFn: service.signin,
  mutationKey: MUTATION_KEYS.SIGNIN,
  onSuccess: onSigninSuccess,
};

const SIGNUP_MUTATION_CONFIG = {
  mutationFn: service.signup,
  mutationKey: MUTATION_KEYS.SIGNUP,
};

const onRefreshTokenSuccess = ({ accessToken, refreshToken }: RefreshTokenResponse) => {
  Token.setRefreshToken(refreshToken);
  Token.respondAccessToken(accessToken);
};
const REFRESH_TOKEN_MUTATION_CONFIG = {
  mutationFn: service.refreshToken,
  mutationKey: MUTATION_KEYS.REFRESH_TOKEN,
  onSuccess: onRefreshTokenSuccess,
};

export const useSigninMutation = () => useMutation(SIGNIN_MUTATION_CONFIG);
export const useSignupMutation = () => useMutation(SIGNUP_MUTATION_CONFIG);
export const useRefreshTokenMutation = () => useMutation(REFRESH_TOKEN_MUTATION_CONFIG);
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
