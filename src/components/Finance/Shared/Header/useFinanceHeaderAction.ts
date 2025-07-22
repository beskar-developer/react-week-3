export const useFinanceHeaderAction = ({ onAdd }: Pick<IFinanceHeaderAction, "onAdd">) => {
  const createOnClick = (onOpen: IFinanceHeaderAction["onOpen"]) => () => {
    onAdd?.();

    setTimeout(onOpen, 100);
  };

  return { createOnClick };
};
