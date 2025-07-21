export const DeleteModalHeader = ({ label }: Pick<IDeleteModal, "label">) => {
  return <span className="text-surface-500 dark:text-surface-400">آیا از حذف این {label} مطمئن هستید؟</span>;
};
