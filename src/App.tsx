import router from "@/router";

const App = () => {
  return (
    <div className={twMerge("app-container dark:text-white", "p-0")}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
