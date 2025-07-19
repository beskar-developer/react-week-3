import type {
  AddCategoryPayload,
  AddCategoryResponse,
  DeleteCategoryPayload,
  DeleteCategoryResponse,
  EditCategoryPayload,
  EditCategoryResponse,
  GetCategoriesResponse,
  IRepository,
} from "@/api/Finance/type";

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
}

export default new Repository();
