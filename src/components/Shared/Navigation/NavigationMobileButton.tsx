export const NavigationMobileButton = ({ open, onOpenChange }: INavigationMobileButton) => {
  const color = open ? "red" : "indigo";

  return (
    <div className="fixed top-4 right-4 z-50 lg:hidden">
      <BaseButton icon variant="outlined" color={color} onClick={() => onOpenChange(!open)}>
        <NavigationMobileIcon open={open} />
      </BaseButton>
    </div>
  );
};
