import type { GetMovieDetailsParams, GetMoviesParams, IService } from "@/api/Movie/type";

import { prettifyParse } from "@shared-vendor/helpers";

import repository from "@/api/Movie/repository";

import {
  getGenresResponseSchema,
  getMovieDetailsResponseSchema,
  getMoviesResponseSchema,
} from "@/api/Movie/schema";

import mapper from "@/api/Movie/mapper";

class Service implements IService {
  async getGenres() {
    const response = await repository.getGenres();

    const parsedResponse = prettifyParse(getGenresResponseSchema, response);

    return mapper.toGetGenresResponse(parsedResponse);
  }

  async getMovies(params: GetMoviesParams) {
    const response = await repository.getMovies(mapper.toGetMoviesParams(params));

    const parsedResponse = prettifyParse(getMoviesResponseSchema, response);

    return mapper.toGetMoviesResponse(parsedResponse);
  }

  async getMovieDetails(params: GetMovieDetailsParams) {
    const response = await repository.getMovieDetails(params);

    const parsedResponse = prettifyParse(getMovieDetailsResponseSchema, response);

    return mapper.toGetMovieDetailsResponse(parsedResponse);
  }
}

export default new Service();
