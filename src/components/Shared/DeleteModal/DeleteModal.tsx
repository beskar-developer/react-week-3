type RenderParams = { close: IDeleteModal["onClose"] };

export const DeleteModal = ({ label, isPending, onDelete }: Omit<IDeleteModal, "onClose">) => {
  const render = ({ close }: RenderParams) => (
    <div className="flex flex-col gap-8 px-4">
      <DeleteModalHeader label={label} />

      <DeleteModalAction isPending={isPending} onClose={close} onDelete={onDelete} />
    </div>
  );

  return <Modal.Window name="DELETE" title="حذف" render={render} />;
};
