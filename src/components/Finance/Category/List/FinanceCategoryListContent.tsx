import { itemAnimationConfig } from "@shared-vendor/constants";
import { useCategoriesQuery } from "@/api/Finance/query";

export const FinanceCategoryListContent = () => {
  const { data: categories } = useCategoriesQuery();

  return (
    <motion.ul className="grid h-full grid-cols-2 content-start gap-4 overflow-hidden sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8">
      {categories.map((category) => (
        <motion.li key={category.id} {...itemAnimationConfig}>
          <FinanceCategoryCard {...category} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
