export const useMovieDetailsParams = () => {
  const params = useParams();

  const id = +(params.id ?? 0);

  return { id };
};
