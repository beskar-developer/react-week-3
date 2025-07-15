import { faker } from "@faker-js/faker";

import { localStorage } from "@shared-vendor/services";

const AVATAR_SRC = faker.image.avatarGitHub();

export const NavigationAvatar = () => {
  const user = localStorage.getItem("USER");

  return (
    <div className="mb-4 flex items-center gap-6">
      <ImageLoader src={AVATAR_SRC} alt="avatar" className="size-10 rounded-full" />

      <span className="text-xl font-extrabold">{user?.username}</span>
    </div>
  );
};
