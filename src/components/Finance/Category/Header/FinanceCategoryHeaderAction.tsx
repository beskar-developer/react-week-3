import { AiFillPlusCircle } from "react-icons/ai";

type RenderParams = { open: () => void };

export const FinanceCategoryHeaderAction = () => {
  const render = ({ open }: RenderParams) => (
    <BaseButton className="w-32" onClick={open}>
      <span>افزودن</span>

      <AiFillPlusCircle />
    </BaseButton>
  );

  return <Modal.Open name="ADD" render={render} />;
};
