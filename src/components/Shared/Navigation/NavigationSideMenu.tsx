import { ROUTES } from "@/constants/Movie";

import { AiFillBank, AiFillVideoCamera } from "react-icons/ai";

const items = [
  {
    label: "فیلم",
    Icon: <AiFillVideoCamera />,
    path: ROUTES.ROOT_PATH,
  },
  {
    label: "مدیرت مالی",
    Icon: <AiFillBank />,
    path: "/finance",
  },
];

export const NavigationSideMenu = () => {
  return (
    <div className="flex h-screen flex-col gap-8 bg-indigo-50 px-4 py-6 pt-16 shadow-xl lg:pt-6 dark:bg-gray-800">
      <NavigationHeader />

      <NavigationMenu items={items} />

      <NavigationLogoutButton />
    </div>
  );
};
