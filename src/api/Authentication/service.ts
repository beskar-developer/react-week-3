import type { IService, RefreshTokenPayload, SigninPayload, SignupPayload } from "@/api/Authentication/type";

import { prettifyParse } from "@shared-vendor/helpers";

import repository from "@/api/Authentication/repository";

import { refreshTokenResponseSchema, signinResponseSchema } from "@/api/Authentication/schema";

class Service implements IService {
  async signup(payload: SignupPayload) {
    await repository.signup(payload);
  }

  async signin(payload: SigninPayload) {
    const response = await repository.signin(payload);

    const parsedResponse = prettifyParse(signinResponseSchema, response);

    return parsedResponse;
  }

  async refreshToken(payload: RefreshTokenPayload) {
    const response = await repository.refreshToken(payload);

    const parsedResponse = prettifyParse(refreshTokenResponseSchema, response);

    return parsedResponse;
  }
}

export default new Service();
