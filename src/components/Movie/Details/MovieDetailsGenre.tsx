import type { Genre } from "@/api/Movie/type";

import { useGenresQuery } from "@/api/Movie/query";

export const MovieDetailsGenre = ({ id }: Pick<Genre, "id">) => {
  const { data: genres } = useGenresQuery();

  return (
    <span className="bg-info-200 text-info-500 rounded-full px-2 py-0.5 text-[8px] font-thin select-none">
      {findByKey(genres, id)?.name}
    </span>
  );
};
