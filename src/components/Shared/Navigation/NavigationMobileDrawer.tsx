export const NavigationMobileDrawer = ({ open, children }: INavigationMobileDrawer) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 z-40 h-full w-[220px]"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
