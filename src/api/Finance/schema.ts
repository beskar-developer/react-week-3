import * as z from "zod/v4";

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.literal(["INCOME", "EXPENSE"]),
});

export const getCategoriesResponseSchema = z.array(categorySchema);
export const addCategoryResponseSchema = z.object({
  message: z.string(),
  category: categorySchema,
});
export const editCategoryResponseSchema = addCategoryResponseSchema.clone();
