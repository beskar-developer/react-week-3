const App = () => {
  return (
    <div className={twMerge("app-container dark:text-white", "p-0")}>
      <RouterProvider />
    </div>
  );
};

export default App;
