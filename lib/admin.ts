import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2wun9WhJNW1UovTBn7t9AzUVfvD",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
