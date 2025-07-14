export type AuthenticationSigninFormValues = {
  username: string;
  password: string;
};

type FieldName = keyof AuthenticationSigninFormValues;

export type AuthenticationSigninField = IAuthenticationField<FieldName>;
