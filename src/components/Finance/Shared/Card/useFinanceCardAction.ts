type Open = () => void;

export const useFinanceCardAction = ({ id, onAction }: IFinanceCardAction) => {
  const createOnClick = (open: Open) => () => {
    onAction(id);

    setTimeout(open, 100);
  };

  return { createOnClick };
};
