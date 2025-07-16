export const NavigationHamburgerMenu = ({ children }: FragmentProps) => {
  return (
    <>
      <div className="hidden lg:block">{children}</div>

      <NavigationMobileMenu>{children}</NavigationMobileMenu>
    </>
  );
};
