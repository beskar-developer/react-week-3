import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";

export const useAuthenticationSigninButton = ({
  isSubmitting,
}: Pick<IAuthenticationButton, "isSubmitting">) => {
  const {
    authentication: { navigateToSignup },
  } = useRouter();

  const actions: ButtonProps[] = [
    {
      children: "ورود",
      loading: isSubmitting,
      type: "submit",
    },
    {
      children: "ثبت نام",
      type: "button",
      variant: "text",
      onClick: navigateToSignup,
    },
  ];

  return { actions };
};
