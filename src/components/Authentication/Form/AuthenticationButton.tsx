export const AuthenticationButton = ({ isSubmitting, useButton }: IAuthenticationButton) => {
  const { actions } = useButton({ isSubmitting });

  return (
    <div className="flex w-full gap-4">
      {actions.map((action) => (
        <BaseButton key={action.type} className="w-full" {...action} />
      ))}
    </div>
  );
};
