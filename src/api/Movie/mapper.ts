/* eslint-disable camelcase */
import type {
  GetGenresResponse,
  GetMovieDetailsResponse,
  GetMoviesParams,
  GetMoviesResponse,
} from "@/api/Movie/type";

import { FULL_DATE_FORMAT } from "@shared-vendor/constants";

import { format } from "date-fns-jalali";

const IMAGE_URL = getEnv("IMAGE_URL");

class Mapper {
  static toGetGenresResponse(response: GetGenresResponse) {
    const { genres } = response;

    return genres;
  }

  private static formatReleaseDate(releaseDate: string) {
    if (!releaseDate) return "نا مشخص";

    return format(releaseDate, FULL_DATE_FORMAT);
  }

  private static toGetMovieResponse({
    poster_path,
    release_date,
    vote_average,
    ...result
  }: GetMoviesResponse["results"][number]) {
    return {
      posterPath: `${IMAGE_URL}/${poster_path}`,
      releaseDate: Mapper.formatReleaseDate(release_date),
      voteAverage: +vote_average.toFixed(1),
      ...toCamelCaseKeys(result),
    };
  }

  static toGetMoviesParams(params: GetMoviesParams) {
    const { page, query } = params;

    return { page, ...(query && { query }) };
  }

  static toGetMoviesResponse(response: GetMoviesResponse) {
    const { page, total_pages, results } = response;

    const normalizedResults = results.map(Mapper.toGetMovieResponse);

    return { page, totalPages: total_pages, results: normalizedResults };
  }

  static toGetMovieDetailsResponse(response: GetMovieDetailsResponse) {
    return { ...toCamelCaseKeys(response), ...Mapper.toGetMovieResponse(response) };
  }
}

export default Mapper;
