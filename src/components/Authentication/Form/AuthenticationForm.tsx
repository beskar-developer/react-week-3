import type { FieldValues } from "react-hook-form";

export const AuthenticationForm = <T extends FieldValues>({ useForm, useButton }: IAuthenticationForm<T>) => {
  const { fields, errors, isSubmitting, register, submitForm } = useForm();

  return (
    <Card className="w-80 sm:w-100" scale={false}>
      <form className="flex flex-col gap-8 px-8 py-6" onSubmit={submitForm}>
        <AuthenticationFormHeader />

        <AuthenticationFields
          fields={fields}
          errors={errors}
          isSubmitting={isSubmitting}
          register={register}
        />

        <AuthenticationButton isSubmitting={isSubmitting} useButton={useButton} />
      </form>
    </Card>
  );
};
