import { createContext, useEffect, useState } from "react";

export const ProductsOnCartContext = createContext();

export default function ProductsOnCartProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("@foodExplorer/productsInCart");

    if (items) {
      setProductsInCart(JSON.parse(items));
    }
  }, []);

  return (
    <ProductsOnCartContext.Provider
      value={{ productsInCart, setProductsInCart }}
    >
      {children}
    </ProductsOnCartContext.Provider>
  );
}
