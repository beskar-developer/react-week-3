import { AiFillPlusCircle } from "react-icons/ai";

type RenderParams = { open: IFinanceCategoryHeaderAction["onOpen"] };

export const FinanceCategoryHeaderAction = () => {
  const { createOnClick } = useFinanceCategoryHeaderAction();

  const render = ({ open }: RenderParams) => (
    <BaseButton className="w-32" onClick={createOnClick(open)}>
      <span>افزودن</span>

      <AiFillPlusCircle />
    </BaseButton>
  );

  return <Modal.Open name="ACTION" render={render} />;
};
