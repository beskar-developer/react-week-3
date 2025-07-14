import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";

import { ROUTES } from "@/constants/Authentication";

export const useAuthenticationSignupButton = ({
  isSubmitting,
}: Pick<IAuthenticationButton, "isSubmitting">) => {
  const navigate = useNavigate();

  const redirectToSignin = () => navigate(`${ROUTES.ROOT_PATH}/${ROUTES.SIGNIN_PATH}`);

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
      onClick: redirectToSignin,
    },
  ];

  return { actions };
};
