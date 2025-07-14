export const AuthenticationForm = ({ onSubmit, children }: IAuthenticationForm) => {
  return (
    <Card className="w-80 sm:w-100" scale={false}>
      <form className="flex flex-col gap-8 px-8 py-6" onSubmit={onSubmit}>
        <AuthenticationFormHeader />

        {children}
      </form>
    </Card>
  );
};
