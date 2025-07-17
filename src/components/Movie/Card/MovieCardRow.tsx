export const MovieCardRow = ({ label, children }: IMovieCardRow) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-surface-400 dark:text-surface-300 shrink-0 text-[8px] font-medium">{label}:</span>

      <span className="text-xs font-bold">{children}</span>
    </div>
  );
};
