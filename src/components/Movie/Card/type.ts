import type { Movie } from "@/api/Movie/type";

export type IMovieCard = Omit<Movie, "genreIds">;

export interface IMovieCardRow {
  label?: string;
  children?: ReactNode;
}
