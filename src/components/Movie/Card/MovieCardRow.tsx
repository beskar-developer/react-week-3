export const MovieCardRow = ({ label, children }: IMovieCardRow) => {
  return (
    <div className="flex items-center gap-2">
      <span className="shrink-0 text-[8px] font-medium text-gray-400 dark:text-gray-300">{label}:</span>

      <span className="text-xs font-bold">{children}</span>
    </div>
  );
};
