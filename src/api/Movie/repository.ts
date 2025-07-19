import type {
  GetGenresResponse,
  GetMovieDetailsParams,
  GetMovieDetailsResponse,
  GetMoviesParams,
  GetMoviesResponse,
  IRepository,
} from "@/types/Movie";

import client from "@/api/Movie/client";

class Repository implements IRepository {
  getGenres() {
    return client.get<unknown, GetGenresResponse>("genre");
  }

  getMovies(params: GetMoviesParams) {
    const hasQuery = params.query;

    const url = hasQuery ? "search" : "";

    return client.get<unknown, GetMoviesResponse>(url, { params });
  }

  getMovieDetails(params: GetMovieDetailsParams) {
    const { id } = params;

    return client.get<unknown, GetMovieDetailsResponse>(String(id));
  }
}

export default new Repository();
