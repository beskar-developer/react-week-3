import type { Category } from "@/types/Finance";

import { generateRandomColor } from "@shared-vendor/helpers";

import { useCategoriesQuery } from "@/api/Finance/query";

const colorCache: Record<Category["id"], string> = {};

export const useFinanceReportColor = () => {
  const { data: categories } = useCategoriesQuery();

  const colorMap = categories.reduce(
    (map, { id }) => {
      if (!colorCache[id]) colorCache[id] = generateRandomColor();

      map[id] = colorCache[id];

      return map;
    },
    {} as Record<Category["id"], string>,
  );

  return { colorMap };
};
