export interface INavigationMobileButton {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface INavigationMobileDrawer {
  open: INavigationMobileButton["open"];
  children: ReactNode;
}
