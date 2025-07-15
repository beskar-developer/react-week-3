import { ROUTES } from "@/constants/Movie";

export const useMovieCard = ({ id }: Pick<IMovieCard, "id">) => {
  const navigate = useNavigate();

  const path = generatePath(`${ROUTES.ROOT_PATH}/${ROUTES.DETAILS_PATH}`, { id: String(id) });

  const redirectToMovieDetails = () => navigate(path);

  return { redirectToMovieDetails };
};
