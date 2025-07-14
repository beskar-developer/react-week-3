export const AuthenticationSigninButton = ({ isSubmitting }: IAuthenticationSigninButton) => {
  const { actions } = useAuthenticationSigninButton({ isSubmitting });

  return (
    <div className="flex w-full gap-4">
      {actions.map((action) => (
        <BaseButton key={action.type} className="w-full" {...action} />
      ))}
    </div>
  );
};
