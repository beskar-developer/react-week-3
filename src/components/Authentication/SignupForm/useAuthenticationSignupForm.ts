import { useSignupMutation } from "@/api/Authentication/mutations";

const INITIAL_FORM_VALUES: AuthenticationSignupFormValues = {
  username: "",
  password: "",
  email: "",
};

const fields: Array<AuthenticationSignupField> = [
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
    name: "email",
    label: "ایمیل",
    Component: TextField,
    rules: {
      validate: {
        required: validateRequired,
        email: validateEmail,
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

export const useAuthenticationSignupForm = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    register,
  } = useForm<AuthenticationSignupFormValues>({
    defaultValues: INITIAL_FORM_VALUES,
  });

  const { mutate } = useSignupMutation();

  const onError = () => reset();
  const onSubmit = (formValues: AuthenticationSignupFormValues) => mutate(formValues, { onError });

  const submitForm = handleSubmit(onSubmit);

  return { fields, errors, isSubmitting, register, submitForm };
};
