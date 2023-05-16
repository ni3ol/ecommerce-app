import { formatCurrency } from "../../shared/helpers/format-currency";
import { Product } from "../domain/product";

export const ProductCard = ({
  product,
  onClick,
}: {
  product: Product;
  onClick: (id: string) => void;
}) => {
  const { name, description, price, id } = product;
  return (
    <div
      style={{
        width: 200,
        height: 300,
        borderRadius: 20,
        color: "#000",
        border: "1px solid #f0f0f0",
        padding: 20,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onClick={() => onClick(id)}
    >
      <div>
        <div
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "#f9f9f9",
            borderRadius: 20,
            textAlign: "center",
          }}
        >
          image
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <p style={{ fontWeight: 800, fontSize: 16, margin: 0 }}>
        {formatCurrency(price)}
      </p>
    </div>
  );
};
