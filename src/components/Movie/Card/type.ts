import type { Movie } from "@/types/Movie";

export type IMovieCard = Omit<Movie, "genreIds">;

export interface IMovieCardRow {
  label?: string;
  children?: ReactNode;
}
