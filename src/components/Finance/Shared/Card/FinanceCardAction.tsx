import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const actions = [
  { children: <AiFillDelete />, color: "error", name: "DELETE" },
  {
    children: <AiFillEdit />,
    color: "success",
    name: "ACTION",
  },
] as const;

export const FinanceCardAction = ({ id, onAction }: IFinanceCardAction) => {
  const { createOnClick } = useFinanceCardAction({ id, onAction });

  const render = (action: ButtonProps) => <BaseButton icon variant="text" {...action} />;

  return (
    <div className="mt-auto flex items-center self-center">
      {actions.map((action) => (
        <Modal.Open
          name={action.name}
          key={action.name}
          render={({ open }) => render({ ...action, onClick: createOnClick(open) })}
        />
      ))}
    </div>
  );
};
