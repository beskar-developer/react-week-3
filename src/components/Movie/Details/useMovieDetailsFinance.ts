import { useMovieDetailsQuery } from "@/api/Movie/query";

export const useMovieDetailsFinance = () => {
  const {
    data: { budget, revenue },
  } = useMovieDetailsQuery();

  const items = [
    {
      label: "بودجه",
      value: budget,
    },
    {
      label: "فروش",
      value: revenue,
    },
  ];

  return { items };
};
