"use no memo";

type RenderParams = { close: IFinanceActionModalContent["onClose"] };

export const FinanceTransactionActionModal = () => {
  const { title } = useFinanceTransactionActionModal();

  const render = ({ close }: RenderParams) => <FinanceTransactionActionModalContent onClose={close} />;

  return <Modal.Window name="ACTION" title={title} render={render} />;
};
