import { ROUTES } from "@/constants/Movie";

export const useMovieDetailsHeader = () => {
  const navigate = useNavigate();

  const redirectToMovieList = () => navigate(`${ROUTES.ROOT_PATH}/${ROUTES.LIST_PATH}`);

  return { redirectToMovieList };
};
