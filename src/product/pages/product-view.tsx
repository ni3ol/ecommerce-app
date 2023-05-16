import { Dispatch, SetStateAction, useState } from "react";
import { Product } from "../domain/product";
import { CartItem } from "../../cart/domain/cart";

export const ProductView = ({
  product,
  cartId,
  handleAddToCart,
}: {
  product: Product;
  cartId: string | undefined;
  handleAddToCart: ({
    productId,
    cartId,
    quantity,
  }: {
    productId: string;
    cartId: string | undefined;
    quantity: number;
  }) => void;
}) => {
  const { name, price, description, id } = product;
  const [quantity, setQuantity] = useState(0);
  return (
    <div style={{ padding: 20 }}>
      <h1>{name}</h1>
      <h2>Buy now</h2>
      <div style={{ marginBottom: 20 }}>
        <input
          type="number"
          value={quantity}
          // @ts-ignore
          onChange={(e) => setQuantity(e.target.value as number)}
        />
        <button
          onClick={() => handleAddToCart({ productId: id, cartId, quantity })}
        >
          Add to cart
        </button>
      </div>
      <div style={{ width: 500, height: 500, backgroundColor: "grey" }}>
        Image
      </div>
      <h3>Reviews</h3>
      <p>Reviews here</p>
    </div>
  );
};
