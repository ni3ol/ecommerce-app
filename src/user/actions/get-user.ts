import { user } from "./mock";

export const getUser = () => {
  return Promise.resolve({ data: user });
};
