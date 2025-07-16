import * as z from "zod/v4";

export const genreSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
});

export const getGenresResponseSchema = z.object({
  genres: z.array(genreSchema),
});

export const movieSchema = z.object({
  id: z.number().positive(),
  genre_ids: z.array(genreSchema.shape.id),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.union([z.iso.date(), z.literal("")]),
  title: z.string(),
  vote_average: z.number().min(0).max(10),
  vote_count: z.number().nonnegative(),
});

export const getMoviesResponseSchema = z.object({
  page: z.number().positive(),
  total_pages: z.number().positive(),
  results: z.array(movieSchema),
});

export const getMovieDetailsResponseSchema = movieSchema.omit({ genre_ids: true }).extend({
  budget: z.number().nonnegative(),
  genres: z.array(genreSchema),
  imdb_id: z.string(),
  revenue: z.number(),
  tagline: z.string(),
  production_companies: z.array(
    z.object({
      id: z.number().positive(),
      name: z.string(),
    }),
  ),
  runtime: z.number().nonnegative(),
});
