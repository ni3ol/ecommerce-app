const items: NavItem[] = ["home", "cart", "checkout"];

export type NavItem = "home" | "product" | "cart" | "checkout";

export const NavBar = ({
  activeView,
  setView,
  setActiveProduct,
  cartCount = 0,
}: {
  activeView: NavItem;
  setView: (s: NavItem) => void;
  setActiveProduct: (i: undefined) => void;
  cartCount: number;
}) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 10 }}
    >
      <h1>LOGO</h1>
      <div style={{ display: "flex", gap: 10 }}>
        {items.map((item) => (
          <ul key={item}>
            <li
              style={{
                textDecoration: activeView === item ? "underline" : "none",
                cursor: "pointer",
              }}
              onClick={() => {
                setView(item);
                setActiveProduct(undefined);
              }}
            >
              {item}
            </li>
          </ul>
        ))}
      </div>
      <p>In Cart: {cartCount} </p>
    </div>
  );
};
