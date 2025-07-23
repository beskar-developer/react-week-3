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

const amountSchema = z.number();
export const transactionSchema = z.object({
  id: z.string(),
  amount: amountSchema,
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

const byCategorySchema = z.record(z.string(), amountSchema);
const byDaySchema = z.record(z.iso.date(), byCategorySchema);

export const getTransactionReportResponseSchema = z.object({
  totalIncome: amountSchema,
  totalExpense: amountSchema,
  balance: amountSchema,
  byCategory: byCategorySchema,
  byDay: byDaySchema,
});
