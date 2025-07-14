import { logout } from "@/helpers";

import { AiOutlineLogout } from "react-icons/ai";

export const NavigationLogoutButton = () => {
  return (
    <BaseButton onClick={logout} className="mt-auto" color="red" variant="text">
      <AiOutlineLogout />
      خروج
    </BaseButton>
  );
};
