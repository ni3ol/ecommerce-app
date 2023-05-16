import { useState } from "react";
import { Product } from "../domain/product";
import { ProductCard } from "../components/product-card";
import { NavItem } from "../../shared/components/nav-bar";

type SortOptions = "none" | "priceLow" | "priceHigh";

export const ProductListView = ({
  products,
  setActiveProduct,
}: {
  products: Product[];
  setActiveProduct: (id: string) => void;
}) => {
  const [sortBy, setSortBy] = useState<SortOptions>();
  const sortedProducts =
    sortBy === "priceLow"
      ? products.sort((a, b) => a.price - b.price)
      : sortBy === "priceHigh"
      ? products.sort((a, b) => b.price - a.price)
      : products;

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "start",
          gap: 20,
        }}
      >
        <span>Sort by:</span>
        <select onChange={(e) => setSortBy(e.target.value as SortOptions)}>
          <option value="none">None</option>
          <option value="priceLow">Price (low to high)</option>
          <option value="priceHigh">Price (high to low)</option>
        </select>
        <p>filter TODO</p>
      </div>
      {sortedProducts.length > 0 ? (
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            gap: 30,
            gridTemplateColumns: "auto auto auto",
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={(id: string) => {
                setActiveProduct(id);
              }}
            />
          ))}
        </div>
      ) : (
        <p>No products</p>
      )}
    </div>
  );
};
