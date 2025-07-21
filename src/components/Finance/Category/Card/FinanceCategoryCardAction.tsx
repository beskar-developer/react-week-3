import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";
import type { Category } from "@/types/Finance";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const actions = [
  { children: <AiFillDelete />, color: "error", name: "DELETE" },
  {
    children: <AiFillEdit />,
    color: "success",
    name: "EDIT",
  },
] as const;

export const FinanceCategoryCardAction = ({ id }: Pick<Category, "id">) => {
  const { createOnClick } = useFinanceCategoryCardAction({ id });

  const render = (action: ButtonProps) => <BaseButton icon variant="text" {...action} />;

  return (
    <div className="flex items-center self-center">
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
