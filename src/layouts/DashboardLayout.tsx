import { useInitRefreshTokenMutation } from "@/api/Authentication/mutations";

const DashboardLayout = () => {
  useInitRefreshTokenMutation();

  return (
    <div>
      <span>hello</span>

      <Outlet />
    </div>
  );
};

export default DashboardLayout;
