import type {
  AddCategoryPayload,
  DeleteCategoryPayload,
  EditCategoryPayload,
  IService,
} from "@/api/Finance/type";

import { prettifyParse } from "@shared-vendor/helpers";

import repository from "@/api/Finance/repository";

import {
  addCategoryResponseSchema,
  editCategoryResponseSchema,
  getCategoriesResponseSchema,
} from "@/api/Finance/schema";

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
}

export default new Service();
