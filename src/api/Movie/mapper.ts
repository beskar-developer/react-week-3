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
    if (!releaseDate) return "نامشخص";

    return format(releaseDate, FULL_DATE_FORMAT);
  }

  private static toFixedNumber(number: number) {
    return +number.toFixed(1);
  }

  private static toGetMovieResponse({
    poster_path,
    release_date,
    vote_average,
    popularity,
    ...result
  }: Omit<GetMoviesResponse["results"][number], "genre_ids">) {
    return {
      posterPath: `${IMAGE_URL}/${poster_path}`,
      releaseDate: Mapper.formatReleaseDate(release_date),
      voteAverage: Mapper.toFixedNumber(vote_average),
      popularity: Mapper.toFixedNumber(popularity),
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
