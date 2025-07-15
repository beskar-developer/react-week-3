import type { Movie } from "@/api/Movie/type";

export type IMovieCard = Movie;

export interface IMovieCardRow {
  label?: string;
  children?: ReactNode;
}
