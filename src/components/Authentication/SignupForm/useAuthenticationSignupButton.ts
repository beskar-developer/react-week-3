import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";

export const useAuthenticationSignupButton = ({
  isSubmitting,
}: Pick<IAuthenticationButton, "isSubmitting">) => {
  const {
    authentication: { navigateToSignin },
  } = useRouter();

  const actions: ButtonProps[] = [
    {
      children: "ثبت نام",
      loading: isSubmitting,
      type: "submit",
    },
    {
      children: "بازگشت",
      type: "button",
      variant: "text",
      onClick: navigateToSignin,
    },
  ];

  return { actions };
};
