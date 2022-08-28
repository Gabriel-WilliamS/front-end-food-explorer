import { useContext } from "react";
import { ProductsOnCartContext } from "../contexts/productsOnCart";

export function useProductsOnCart() {
  const context = useContext(ProductsOnCartContext);
  if (!context)
    throw new Error(
      "useProductsOnCart must be used within ProductsOnCartProvider"
    );

  return context;
}
