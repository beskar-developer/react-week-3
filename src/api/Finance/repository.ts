import type {
  AddCategoryPayload,
  AddCategoryResponse,
  AddTransactionPayload,
  AddTransactionResponse,
  DeleteCategoryPayload,
  DeleteCategoryResponse,
  DeleteTransactionPayload,
  DeleteTransactionResponse,
  EditCategoryPayload,
  EditCategoryResponse,
  EditTransactionPayload,
  EditTransactionResponse,
  GetCategoriesResponse,
  GetTransactionReportParams,
  GetTransactionReportResponse,
  GetTransactionsParams,
  GetTransactionsResponse,
  IRepository,
} from "@/types/Finance";

import client from "@/api/Finance/client";

class Repository implements IRepository {
  getCategories() {
    return client.get<unknown, GetCategoriesResponse>("category");
  }

  addCategory(payload: AddCategoryPayload) {
    return client.post<unknown, AddCategoryResponse>("category", payload);
  }

  editCategory(payload: EditCategoryPayload) {
    const { id, ...category } = payload;

    return client.put<unknown, EditCategoryResponse>(`category/${id}`, category);
  }

  deleteCategory(id: DeleteCategoryPayload) {
    return client.delete<unknown, DeleteCategoryResponse>(`category/${id}`);
  }

  getTransactions(params: GetTransactionsParams, signal?: AbortSignal) {
    return client.get<unknown, GetTransactionsResponse>("transaction", { params, signal });
  }

  addTransaction(payload: AddTransactionPayload) {
    return client.post<unknown, AddTransactionResponse>("transaction", payload);
  }

  editTransaction(payload: EditTransactionPayload) {
    const { id, ...transaction } = payload;

    return client.put<unknown, EditTransactionResponse>(`transaction/${id}`, transaction);
  }

  deleteTransaction(id: DeleteTransactionPayload) {
    return client.delete<unknown, DeleteTransactionResponse>(`transaction/${id}`);
  }

  getTransactionReport(params: GetTransactionReportParams) {
    return client.get<unknown, GetTransactionReportResponse>("transaction/report", { params });
  }
}

export default new Repository();
