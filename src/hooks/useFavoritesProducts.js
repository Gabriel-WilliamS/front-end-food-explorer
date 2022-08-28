import { useContext } from "react";
import { FavoritesProductsContext } from "../contexts/favoritesProducts";

export function useFavoritesProducts() {
  const context = useContext(FavoritesProductsContext);
  if (!context)
    throw new Error(
      "useFavoritesProducts must be used within FavoritesProductsProvider"
    );

  return context;
}
