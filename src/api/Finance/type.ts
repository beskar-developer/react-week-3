import * as z from "zod/v4";

import {
  addCategoryResponseSchema,
  addTransactionResponseSchema,
  categorySchema,
  editCategoryResponseSchema,
  editTransactionResponseSchema,
  getCategoriesResponseSchema,
  getTransactionsResponseSchema,
  transactionSchema,
} from "@/api/Finance/schema";

export type Category = z.infer<typeof categorySchema>;

export type AddCategoryPayload = Omit<Category, "id">;
export type EditCategoryPayload = Category;
export type DeleteCategoryPayload = Category["id"];

export type GetCategoriesResponse = z.infer<typeof getCategoriesResponseSchema>;
export type AddCategoryResponse = z.infer<typeof addCategoryResponseSchema>;
export type EditCategoryResponse = z.infer<typeof editCategoryResponseSchema>;
export type DeleteCategoryResponse = void;

export type Transaction = z.infer<typeof transactionSchema>;

type CategoryId = Category["id"];

export type GetTransactionsParams = {
  categoryId?: CategoryId;
  startDate?: string;
  endDate?: string;
};
export type AddTransactionPayload = Omit<Transaction, "id" | "category"> & {
  categoryId: CategoryId;
};
export type EditTransactionPayload = AddTransactionPayload & { id: Transaction["id"] };
export type DeleteTransactionPayload = Transaction["id"];

export type GetTransactionsResponse = z.infer<typeof getTransactionsResponseSchema>;
export type AddTransactionResponse = z.infer<typeof addTransactionResponseSchema>;
export type EditTransactionResponse = z.infer<typeof editTransactionResponseSchema>;
export type DeleteTransactionResponse = void;

export interface IRepository {
  getCategories: () => Promise<GetCategoriesResponse>;
  addCategory: (payload: AddCategoryPayload) => Promise<AddCategoryResponse>;
  editCategory: (payload: EditCategoryPayload) => Promise<EditCategoryResponse>;
  deleteCategory: (payload: DeleteCategoryPayload) => Promise<DeleteCategoryResponse>;
  getTransactions: (params: GetTransactionsParams) => Promise<GetTransactionsResponse>;
  addTransaction: (payload: AddTransactionPayload) => Promise<AddTransactionResponse>;
  editTransaction: (payload: EditTransactionPayload) => Promise<EditTransactionResponse>;
  deleteTransaction: (payload: DeleteCategoryPayload) => Promise<DeleteTransactionResponse>;
}

export type IService = IRepository;
