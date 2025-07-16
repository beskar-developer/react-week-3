import { useMovieDetailsQuery } from "@/api/Movie/query";

export const MovieDetailsStatus = () => {
  const {
    data: { releaseDate, voteCount, popularity },
  } = useMovieDetailsQuery();

  return (
    <>
      <MovieCardRow label="تعداد آرا">{voteCount}</MovieCardRow>

      <MovieCardRow label="محبوبیت">{popularity}</MovieCardRow>

      <MovieCardRow label="تاریخ انتشاز">{releaseDate}</MovieCardRow>
    </>
  );
};
