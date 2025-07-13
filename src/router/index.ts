const routes = import.meta.glob(["./*/index.ts"], {
  eager: true,
  import: "default",
});

const flattedRoutes = Object.values(routes).flat() as RouteObject[];

const router = createHashRouter(flattedRoutes);

export default router;
