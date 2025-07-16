import type { Genre } from "@/api/Movie/type";

import { useGenresQuery } from "@/api/Movie/query";

export const MovieDetailsGenre = ({ id }: Pick<Genre, "id">) => {
  const { data: genres } = useGenresQuery();

  return (
    <span className="rounded-full bg-sky-200 px-2 py-0.5 text-[8px] font-thin text-sky-500 select-none">
      {findByKey(genres, id)?.name}
    </span>
  );
};
