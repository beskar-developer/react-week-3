import { useInitRefreshTokenMutation } from "@/api/Authentication/mutation";

const DashboardLayout = () => {
  useInitRefreshTokenMutation();

  return (
    <div className="grid grid-cols-[248px_1fr]">
      <NavigationSideMenu />

      <Outlet />
    </div>
  );
};

export default DashboardLayout;
