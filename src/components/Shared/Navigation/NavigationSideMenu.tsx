import { ROUTES as MOVIE_ROUTES } from "@/constants/Movie";
import { ROUTES as FINANCE_ROUTES } from "@/constants/Finance";

import { AiFillBank, AiFillVideoCamera } from "react-icons/ai";

const items = [
  {
    label: "فیلم",
    Icon: <AiFillVideoCamera />,
    path: MOVIE_ROUTES.ROOT_PATH,
  },
  {
    label: "مدیرت مالی",
    Icon: <AiFillBank />,
    path: FINANCE_ROUTES.ROOT_PATH,
    children: [
      {
        label: "دسته بندی ها",
        path: `${FINANCE_ROUTES.ROOT_PATH}/${FINANCE_ROUTES.CATEGORY_PATH}`,
      },
      {
        label: "تراکنش ها",
        path: `${FINANCE_ROUTES.ROOT_PATH}/${FINANCE_ROUTES.TRANSACTION_PATH}`,
      },
      {
        label: "گزارشات",
        path: `${FINANCE_ROUTES.ROOT_PATH}/${FINANCE_ROUTES.REPORT_PATH}`,
      },
    ],
  },
];

export const NavigationSideMenu = () => {
  return (
    <div className="bg-primary-50 dark:bg-surface-800 flex h-screen flex-col gap-8 px-4 py-6 pt-16 shadow-xl lg:pt-6">
      <NavigationHeader />

      <NavigationMenu items={items} />

      <NavigationLogoutButton />
    </div>
  );
};
