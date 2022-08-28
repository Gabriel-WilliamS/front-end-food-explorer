import { createContext, useEffect, useState } from "react";

export const FavoritesProductsContext = createContext();

export default function FavoritesProductsProvider({ children }) {
  const [favoritesProducts, setFavoritesProducts] = useState([]);

  return (
    <FavoritesProductsContext.Provider
      value={{ favoritesProducts, setFavoritesProducts }}
    >
      {children}
    </FavoritesProductsContext.Provider>
  );
}
