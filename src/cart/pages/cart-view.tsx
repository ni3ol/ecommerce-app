import { formatCurrency } from "../../shared/helpers/format-currency";
import { CartItemDetails } from "../domain/cart";

export const CartView = ({
  cartItems,
  cartId,
}: {
  cartItems: CartItemDetails[];
  cartId: string | undefined;
}) => {
  return (
    <div>
      <h1>My cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <tr>
              <td>{cartItem.productName}</td>
              <td>{cartItem.quantity}</td>
              <td>{formatCurrency(cartItem.price)}</td>
              <td>{formatCurrency(cartItem.price * cartItem.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
