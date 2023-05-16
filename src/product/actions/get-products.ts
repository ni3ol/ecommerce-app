import { mockProducts } from "./mock";

export const getProducts = async () => {
  return Promise.resolve({ data: mockProducts });
};
