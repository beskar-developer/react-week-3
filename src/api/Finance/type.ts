import * as z from "zod/v4";

import {
  addCategoryResponseSchema,
  categorySchema,
  editCategoryResponseSchema,
  getCategoriesResponseSchema,
} from "@/api/Finance/schema";

export type Category = z.infer<typeof categorySchema>;

export type AddCategoryPayload = Omit<Category, "id">;
export type EditCategoryPayload = Category;
export type DeleteCategoryPayload = Category["id"];

export type GetCategoriesResponse = z.infer<typeof getCategoriesResponseSchema>;
export type AddCategoryResponse = z.infer<typeof addCategoryResponseSchema>;
export type EditCategoryResponse = z.infer<typeof editCategoryResponseSchema>;
export type DeleteCategoryResponse = void;

export interface IRepository {
  getCategories: () => Promise<GetCategoriesResponse>;
  addCategory: (payload: AddCategoryPayload) => Promise<AddCategoryResponse>;
  editCategory: (payload: EditCategoryPayload) => Promise<EditCategoryResponse>;
  deleteCategory: (payload: DeleteCategoryPayload) => Promise<DeleteCategoryResponse>;
}

export type IService = IRepository;
