export const useMovieDetailsHeader = () => {
  const navigate = useNavigate();

  const redirectToMovieList = () => navigate(-1);

  return { redirectToMovieList };
};
