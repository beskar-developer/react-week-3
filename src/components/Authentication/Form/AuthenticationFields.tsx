import type { FieldValues } from "react-hook-form";

export const AuthenticationFields = <T extends FieldValues>({
  fields,
  register,
  errors,
  isSubmitting,
}: IAuthenticationFields<T>) => {
  return fields.map(({ name, Component, rules, label }) => (
    <Component
      label={label}
      errorMessage={errors[name]?.message as string}
      disabled={isSubmitting}
      key={name}
      {...register(name, rules)}
    />
  ));
};
