export const NavigationMobileMenu = ({ children }: FragmentProps) => {
  const [isOpen, setIsOpen] = usePersistState(false, "SIDE_BAR");

  return (
    <div className="lg:hidden">
      <NavigationMobileButton open={isOpen} onOpenChange={setIsOpen} />

      <NavigationMobileOverlay open={isOpen} onOpenChange={setIsOpen} />

      <NavigationMobileDrawer open={isOpen}>{children}</NavigationMobileDrawer>
    </div>
  );
};
