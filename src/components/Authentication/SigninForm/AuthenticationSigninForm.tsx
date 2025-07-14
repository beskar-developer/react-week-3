"use no memo";

export const AuthenticationSigninForm = () => {
  const { fields, errors, isSubmitting, register, submitForm } = useAuthenticationSigninForm();

  return (
    <AuthenticationForm onSubmit={submitForm}>
      {fields.map(({ name, Component, rules, label }) => (
        <Component
          label={label}
          errorMessage={errors[name]?.message}
          disabled={isSubmitting}
          key={name}
          {...register(name, rules)}
        />
      ))}

      <AuthenticationSigninButton isSubmitting={isSubmitting} />
    </AuthenticationForm>
  );
};
