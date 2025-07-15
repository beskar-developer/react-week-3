export const MovieCardContent = ({
  title,
  releaseDate,
  voteAverage,
}: Pick<IMovieCard, "title" | "releaseDate" | "voteAverage">) => {
  const rows = [
    {
      label: "نام فیلم",
      children: title,
    },
    {
      label: "تاریخ انتشار",
      children: releaseDate,
    },
    {
      label: "امتیاز",
      children: <MovieCardRating voteAverage={voteAverage} />,
    },
  ];

  return (
    <div className="flex flex-col gap-2 px-2 py-4">
      {rows.map((row) => (
        <MovieCardRow key={row.label} {...row} />
      ))}
    </div>
  );
};
