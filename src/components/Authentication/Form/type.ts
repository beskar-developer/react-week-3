import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";
import type { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

export type AuthenticationFieldComponent = typeof TextField | typeof PasswordField;

export type IAuthenticationButton = {
  isSubmitting: boolean;
  useButton: ({ isSubmitting }: { isSubmitting: boolean }) => { actions: ButtonProps[] };
};

export interface IAuthenticationField<T> {
  name: T;
  label: string;
  rules: object;
  Component: AuthenticationFieldComponent;
}

export interface IAuthenticationFields<T extends FieldValues> {
  fields: IAuthenticationField<Path<T>>[];
  errors: FieldErrors<T>;
  isSubmitting: IAuthenticationButton["isSubmitting"];
  register: UseFormRegister<T>;
}

type AuthenticationUseFormReturn<T extends FieldValues> = IAuthenticationFields<T> & {
  submitForm: (event: SyntheticEvent) => void;
};
export interface IAuthenticationForm<T extends FieldValues> {
  useForm: () => AuthenticationUseFormReturn<T>;
  useButton: IAuthenticationButton["useButton"];
}
