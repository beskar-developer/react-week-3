export interface IFinanceActionModalContent {
  onClose: () => void;
}

export interface IFinanceActionModalButton extends IFinanceActionModalContent {
  label: string;
  isSubmitting: boolean;
}
