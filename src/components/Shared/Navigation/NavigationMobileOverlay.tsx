export const NavigationMobileOverlay = ({ open, onOpenChange }: INavigationMobileButton) => {
  if (!open) return <></>;

  return (
    <div
      className="fixed top-0 left-0 z-20 h-screen w-screen backdrop-blur-xs"
      onClick={() => onOpenChange(false)}
    />
  );
};
