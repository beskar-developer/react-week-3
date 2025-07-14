import { useSigninMutation } from "@/api/Authentication/mutations";

const INITIAL_FORM_VALUES: AuthenticationSigninFormValues = {
  username: "",
  password: "",
};

const fields: Array<AuthenticationSigninField> = [
  {
    name: "username",
    label: "نام کاربری",
    Component: TextField,
    rules: {
      validate: {
        required: validateRequired,
      },
    },
  },
  {
    name: "password",
    label: "رمز عبور",
    Component: PasswordField,
    rules: {
      validate: {
        required: validateRequired,
      },
    },
  },
];

export const useAuthenticationSigninForm = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    register,
  } = useForm<AuthenticationSigninFormValues>({
    defaultValues: INITIAL_FORM_VALUES,
  });

  const { mutate } = useSigninMutation();

  const submitForm = handleSubmit((formValues) => mutate(formValues, { onError: () => reset() }));

  return { fields, errors, isSubmitting, register, submitForm };
};
