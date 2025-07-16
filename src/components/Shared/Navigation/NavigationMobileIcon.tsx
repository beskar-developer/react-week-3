import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";

export const NavigationMobileIcon = ({ open }: Pick<INavigationMobileButton, "open">) => {
  if (open) return <AiFillCloseCircle />;

  return <AiOutlineMenu />;
};
