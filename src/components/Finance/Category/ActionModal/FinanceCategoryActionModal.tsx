"use no memo";

type RenderParams = { close: IFinanceActionModalContent["onClose"] };

export const FinanceCategoryActionModal = () => {
  const { title } = useFinanceCategoryActionModal();

  const render = ({ close }: RenderParams) => <FinanceCategoryActionModalContent onClose={close} />;

  return <Modal.Window name="ACTION" title={title} render={render} />;
};
