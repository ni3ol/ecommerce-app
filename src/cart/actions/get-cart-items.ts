import { cartItems } from "./mock";

export const getCartItems = async (cartId: string) => {
  return Promise.resolve({ data: cartItems });
};
