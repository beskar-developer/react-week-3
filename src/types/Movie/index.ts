import type { KeysToCamelCase } from "@shared-vendor/types";

import * as z from "zod/v4";

import type {
  genreSchema,
  getGenresResponseSchema,
  getMovieDetailsResponseSchema,
  getMoviesResponseSchema,
  movieSchema,
} from "@/api/Movie/schema";

export type GetGenresResponse = z.infer<typeof getGenresResponseSchema>;
export type Genre = z.infer<typeof genreSchema>;

export type GetMoviesResponse = z.infer<typeof getMoviesResponseSchema>;
export type GetMoviesParams = { page?: number; query?: string };
export type Movie = KeysToCamelCase<z.infer<typeof movieSchema>>;

export type GetMovieDetailsParams = { id: Movie["id"] };
export type GetMovieDetailsResponse = z.infer<typeof getMovieDetailsResponseSchema>;

export interface IRepository {
  getGenres: () => Promise<GetGenresResponse>;
  getMovies: (params: GetMoviesParams) => Promise<GetMoviesResponse>;
  getMovieDetails: (params: GetMovieDetailsParams) => Promise<GetMovieDetailsResponse>;
}
export interface IService {
  getGenres: () => Promise<Genre[]>;
  getMovies: (params: GetMoviesParams) => Promise<{
    page: GetMoviesResponse["page"];
    results: Movie[];
  }>;
  getMovieDetails: (paras: GetMovieDetailsParams) => Promise<KeysToCamelCase<GetMovieDetailsResponse>>;
}
