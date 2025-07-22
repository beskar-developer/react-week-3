export const FinanceHeader = ({ label, Icon, onAdd }: IFinanceHeader) => {
  return (
    <header className="flex items-center justify-between px-4 pt-6">
      <FinanceHeaderContent label={label} Icon={Icon} />

      <FinanceHeaderAction onAdd={onAdd} />
    </header>
  );
};
