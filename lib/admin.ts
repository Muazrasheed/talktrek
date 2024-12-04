import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2pkk12eDJA0AIsF1C7b26tsc1vl",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
