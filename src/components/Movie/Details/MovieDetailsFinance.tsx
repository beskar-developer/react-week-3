export const MovieDetailsFinance = () => {
  const { items } = useMovieDetailsFinance();

  return items.map((item) => <MovieDetailsPrice key={item.label} {...item} />);
};
