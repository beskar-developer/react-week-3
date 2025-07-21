import type { Category } from "@/types/Finance";

export const FinanceCategoryCard = ({ id, type, name }: Category) => {
  return (
    <Card className="flex flex-col gap-2 px-3 pt-4 pb-2">
      <FinanceCategoryCardContent name={name} type={type} />

      <FinanceCategoryCardAction id={id} />
    </Card>
  );
};
