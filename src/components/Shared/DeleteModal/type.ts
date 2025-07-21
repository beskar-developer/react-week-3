type OnClose = () => void;

export interface IDeleteModal {
  label: string;
  isPending: boolean;
  onClose: OnClose;
  onDelete: (onClose: OnClose) => void;
}
