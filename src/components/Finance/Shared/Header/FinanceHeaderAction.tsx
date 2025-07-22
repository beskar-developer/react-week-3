import { AiFillPlusCircle } from "react-icons/ai";

type RenderParams = { open: IFinanceHeaderAction["onOpen"] };

export const FinanceHeaderAction = ({ onAdd }: Pick<IFinanceHeaderAction, "onAdd">) => {
  const { createOnClick } = useFinanceHeaderAction({ onAdd });

  const render = ({ open }: RenderParams) => (
    <BaseButton className="w-32" onClick={createOnClick(open)}>
      <span>افزودن</span>

      <AiFillPlusCircle />
    </BaseButton>
  );

  if (!onAdd) return <></>;

  return <Modal.Open name="ACTION" render={render} />;
};
