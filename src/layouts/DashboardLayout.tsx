import { useInitRefreshTokenMutation } from "@/api/Authentication/mutation";

const DashboardLayout = () => {
  useInitRefreshTokenMutation();

  return (
    <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-[248px_1fr]">
      <NavigationHamburgerMenu>
        <NavigationSideMenu />
      </NavigationHamburgerMenu>

      <div className="h-screen overflow-auto pt-16 lg:pt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
