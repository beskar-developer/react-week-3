export type AuthenticationSignupFormValues = {
  username: string;
  password: string;
  email: string;
};

type FieldName = keyof AuthenticationSignupFormValues;

export type AuthenticationSignupField = {
  name: FieldName;
  label: string;
  rules: object;
  Component: AuthenticationFieldComponent;
};
