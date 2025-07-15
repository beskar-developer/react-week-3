import { useInitRefreshTokenMutation } from "@/api/Authentication/mutation";

const DashboardLayout = () => {
  useInitRefreshTokenMutation();

  return (
    <div className="grid grid-cols-[248px_1fr] overflow-hidden">
      <NavigationSideMenu />

      <div className="h-screen overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
