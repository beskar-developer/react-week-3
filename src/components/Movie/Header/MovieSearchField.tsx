export const MovieSearchField = () => {
  const { search, setSearch } = useMovieSearchParams();

  return (
    <TextField
      label="جستجو"
      name="search"
      value={search}
      containerClassName="bg-primary-100"
      onChange={(event) => setSearch(event.target.value)}
    />
  );
};
