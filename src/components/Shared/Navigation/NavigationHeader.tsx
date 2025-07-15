export const NavigationHeader = () => {
  return (
    <div className="flex flex-col gap-3">
      <NavigationAvatar />

      <ThemeToggleButton />
    </div>
  );
};
