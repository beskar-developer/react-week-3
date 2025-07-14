import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";

import { ROUTES } from "@/constants/Authentication";

export const useAuthenticationSigninButton = ({ isSubmitting }: IAuthenticationSigninButton) => {
  const navigate = useNavigate();

  const redirectToSignup = () => navigate(`${ROUTES.ROOT_PATH}/${ROUTES.SIGNUP_PATH}`);

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
      onClick: redirectToSignup,
    },
  ];

  return { actions };
};
