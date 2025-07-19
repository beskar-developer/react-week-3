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

export const transactionSchema = z.object({
  id: z.string(),
  amount: z.number().nonnegative(),
  date: z.iso.datetime(),
  note: z.string(),
  category: categorySchema,
});

export const getTransactionsResponseSchema = z.array(transactionSchema);
export const addTransactionResponseSchema = z.object({
  message: z.string(),
  transaction: transactionSchema,
});
export const editTransactionResponseSchema = addTransactionResponseSchema.clone();
