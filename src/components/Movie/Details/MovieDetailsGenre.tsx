import type { Genre } from "@/types/Movie";

import { useGenresQuery } from "@/api/Movie/query";

export const MovieDetailsGenre = ({ id }: Pick<Genre, "id">) => {
  const { data: genres } = useGenresQuery();

  return <Chip>{findByKey(genres, id)?.name}</Chip>;
};
