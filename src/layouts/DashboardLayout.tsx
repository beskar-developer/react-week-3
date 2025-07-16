import { useInitRefreshTokenMutation } from "@/api/Authentication/mutation";

const DashboardLayout = () => {
  useInitRefreshTokenMutation();

  return (
    <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-[248px_1fr]">
      <NavigationSideMenu />

      <div className="h-screen overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
