export const FinanceHeaderContent = ({ label, Icon }: Omit<IFinanceHeader, "onAdd">) => {
  return (
    <h1 className="flex items-center gap-2 text-xl font-black">
      <Icon className="text-primary-500 dark:text-primary-300 size-8" />

      <span>{label}</span>
    </h1>
  );
};
