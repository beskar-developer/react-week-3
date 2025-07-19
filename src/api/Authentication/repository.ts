import type {
  IRepository,
  RefreshTokenPayload,
  RefreshTokenResponse,
  SigninPayload,
  SigninResponse,
  SignupPayload,
  SignupResponse,
} from "@/types/Authentication";

import client from "@/api/Authentication/client";

class Repository implements IRepository {
  signup(payload: SignupPayload) {
    return client.post<unknown, SignupResponse>("signup", payload);
  }

  signin(payload: SigninPayload) {
    return client.post<unknown, SigninResponse>("signin", payload);
  }

  refreshToken(payload: RefreshTokenPayload) {
    return client.post<unknown, RefreshTokenResponse>("refreshtoken", payload);
  }
}

export default new Repository();
