import type {
  AddCategoryPayload,
  AddTransactionPayload,
  DeleteCategoryPayload,
  DeleteTransactionPayload,
  EditCategoryPayload,
  EditTransactionPayload,
  GetTransactionReportParams,
  GetTransactionsParams,
  IService,
} from "@/types/Finance";

import { prettifyParse } from "@shared-vendor/helpers";

import repository from "@/api/Finance/repository";

import {
  addCategoryResponseSchema,
  addTransactionResponseSchema,
  editCategoryResponseSchema,
  editTransactionResponseSchema,
  getCategoriesResponseSchema,
  getTransactionReportResponseSchema,
  getTransactionsResponseSchema,
} from "@/api/Finance/schema";

import mapper from "@/api/Finance/mapper";

class Service implements IService {
  async getCategories() {
    const response = await repository.getCategories();

    const parsedResponse = prettifyParse(getCategoriesResponseSchema, response);

    return parsedResponse;
  }

  async addCategory(payload: AddCategoryPayload) {
    const response = await repository.addCategory(payload);

    const parsedResponse = prettifyParse(addCategoryResponseSchema, response);

    return parsedResponse;
  }

  async editCategory(payload: EditCategoryPayload) {
    const response = await repository.editCategory(payload);

    const parsedResponse = prettifyParse(editCategoryResponseSchema, response);

    return parsedResponse;
  }

  async deleteCategory(payload: DeleteCategoryPayload) {
    await repository.deleteCategory(payload);
  }

  async getTransactions(params: GetTransactionsParams, signal?: AbortSignal) {
    const response = await repository.getTransactions(mapper.toGetTransactionParams(params), signal);

    const parsedResponse = prettifyParse(getTransactionsResponseSchema, response);

    return parsedResponse;
  }

  async addTransaction(payload: AddTransactionPayload) {
    const response = await repository.addTransaction(payload);

    const parsedResponse = prettifyParse(addTransactionResponseSchema, response);

    return parsedResponse;
  }

  async editTransaction(payload: EditTransactionPayload) {
    const response = await repository.editTransaction(payload);

    const parsedResponse = prettifyParse(editTransactionResponseSchema, response);

    return parsedResponse;
  }

  async deleteTransaction(payload: DeleteTransactionPayload) {
    await repository.deleteTransaction(payload);
  }

  async getTransactionReport(params: GetTransactionReportParams) {
    const response = await repository.getTransactionReport(params);

    const parsedResponse = prettifyParse(getTransactionReportResponseSchema, response);

    return parsedResponse;
  }
}

export default new Service();
