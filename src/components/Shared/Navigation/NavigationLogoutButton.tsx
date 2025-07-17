import { logout } from "@/helpers";

import { AiOutlineLogout } from "react-icons/ai";

export const NavigationLogoutButton = () => {
  return (
    <BaseButton onClick={logout} className="mt-auto" color="error" variant="text">
      <AiOutlineLogout />
      خروج
    </BaseButton>
  );
};
