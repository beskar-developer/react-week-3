export const FinanceCategorySelect = ({ value, onChange }: IFinanceCategorySelect) => {
  const { field, getCategoryTypeById } = useFinanceCategorySelect({ value, onChange });

  const renderLabel = ({ value, label }: FinanceCategorySelectOption) => (
    <>
      <span>{label}</span>

      <FinanceCategoryChip type={getCategoryTypeById(value)} />
    </>
  );

  return (
    <div>
      <Select fieldClassName="bg-primary-100" renderLabel={renderLabel} {...field} />
    </div>
  );
};
