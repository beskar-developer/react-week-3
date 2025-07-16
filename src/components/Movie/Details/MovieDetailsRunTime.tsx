import { useMovieDetailsQuery } from "@/api/Movie/query";

import { AiFillClockCircle } from "react-icons/ai";

export const MovieDetailsRuntime = () => {
  const {
    data: { runtime },
  } = useMovieDetailsQuery();

  return (
    <MovieCardRow label="مدت زمان">
      <span className="flex items-center gap-1">
        {runtime}

        <AiFillClockCircle />
      </span>
    </MovieCardRow>
  );
};
