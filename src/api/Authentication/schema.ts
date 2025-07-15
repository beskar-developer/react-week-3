import * as z from "zod/v4";

const accessTokenSchema = z.jwt();
const refreshTokenSchema = z.uuid();

export const signinResponseSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.email(),
  accessToken: accessTokenSchema,
  refreshToken: refreshTokenSchema,
});

export const refreshTokenResponseSchema = z.object({
  accessToken: accessTokenSchema,
  refreshToken: refreshTokenSchema,
});
