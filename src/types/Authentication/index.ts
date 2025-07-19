import { refreshTokenResponseSchema, signinResponseSchema } from "@/api/Authentication/schema";
import * as z from "zod/v4";

export type SigninResponse = z.infer<typeof signinResponseSchema>;

type UserName = SigninResponse["username"];
type Email = SigninResponse["email"];
type Password = string;

export type SignupPayload = {
  username: UserName;
  email: Email;
  password: Password;
};
export type SignupResponse = void;

export type SigninPayload = {
  username: UserName;
  password: Password;
};

export type RefreshTokenPayload = {
  refreshToken: SigninResponse["refreshToken"];
};
export type RefreshTokenResponse = z.infer<typeof refreshTokenResponseSchema>;

export interface IRepository {
  signup: (payload: SignupPayload) => Promise<SignupResponse>;
  signin: (payload: SigninPayload) => Promise<SigninResponse>;
  refreshToken: (payload: RefreshTokenPayload) => Promise<RefreshTokenResponse>;
}

export type IService = IRepository;
