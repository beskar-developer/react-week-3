export type AuthenticationSigninFormValues = {
  username: string;
  password: string;
};

export interface IAuthenticationSigninForm {
  onSubmit: (payload: AuthenticationSigninFormValues) => void;
}

type FieldName = keyof AuthenticationSigninFormValues;
type Component = typeof TextField | typeof PasswordField;

export type AuthenticationSigninField = {
  name: FieldName;
  label: string;
  rules: object;
  Component: Component;
};

export interface IAuthenticationSigninButton {
  isSubmitting: boolean;
}
