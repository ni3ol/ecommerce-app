import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { getProducts } from "./product/actions/get-products";
import { Product } from "./product/domain/product";
import { NavBar } from "./shared/components/nav-bar";
import { ProductListView } from "./product/pages/product-list-view";
import { ProductView } from "./product/pages/product-view";
import { CartItem, CartItemDetails } from "./cart/domain/cart";
import { User } from "./user/domain/user";
import { getUser } from "./user/actions/get-user";
import { CartView } from "./cart/pages/cart-view";

function App() {
  const [view, setView] = React.useState<
    "home" | "product" | "cart" | "checkout"
  >("home");

  const [products, setProducts] = useState<Product[]>([]);
  const [activeProductId, setActiveProductId] = useState<string | undefined>();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser();
      setUser(response.data);
    };

    fetchUser();
  }, []);

  const activeProduct = useMemo(
    () => products.find((p) => p.id === activeProductId),
    [activeProductId, products]
  );

  let userCartId = user?.cartId || undefined;

  const handleAddToCart = ({
    cartId,
    productId,
    quantity,
  }: {
    cartId: string | undefined;
    productId: string;
    quantity: number;
  }) => {
    const existingCartItem = cartItems.find(
      (c) => c.productId === productId && c.cartId === cartId
    );

    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      const newCartItem: CartItem = {
        productId,
        cartId: userCartId || "1",
        quantity: quantity,
      };

      setCartItems([...cartItems, newCartItem]);
    }
  };

  const cartItemDetails: CartItemDetails[] = useMemo(() => {
    return cartItems.map((cartItem) => ({
      cartId: cartItem.cartId,
      productId: cartItem.productId,
      quantity: cartItem.quantity,
      productName:
        products.find((p) => p.id === cartItem.productId)?.name || "",
      price: products.find((p) => p.id === cartItem.productId)?.price || 0,
    }));
  }, [cartItems, products]);

  return (
    <div>
      <NavBar
        activeView={view}
        setView={setView}
        setActiveProduct={setActiveProductId}
        cartCount={cartItems.length || 0}
      />
      {activeProduct ? (
        <ProductView
          product={activeProduct}
          cartId={userCartId}
          handleAddToCart={handleAddToCart}
        />
      ) : view === "home" ? (
        <ProductListView
          products={products}
          setActiveProduct={setActiveProductId}
        />
      ) : view === "cart" ? (
        <CartView cartItems={cartItemDetails} cartId={userCartId} />
      ) : (
        <p>No products</p>
      )}
    </div>
  );
}

export default App;
