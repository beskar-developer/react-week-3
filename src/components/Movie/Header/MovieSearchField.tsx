export const MovieSearchField = () => {
  const {
    movie: { search, setSearch },
  } = useRouter();

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
