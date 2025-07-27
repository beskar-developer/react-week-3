const ProtectedRoute = () => {
  const { access } = useLoaderData();
  const acl = useACL();

  const hasAccess = acl.hasAccess(access);

  if (hasAccess) return <Outlet />;

  return <NotAllowedPage />;
};

export default ProtectedRoute;
