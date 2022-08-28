import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global";
import theme from "../src/styles/theme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes } from "./routes";
import ProductsOnCartProvider from "./contexts/productsOnCart";
import FavoritesProductsProvider from "./contexts/favoritesProducts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProductsOnCartProvider>
        <FavoritesProductsProvider>
          <GlobalStyles />
          <Routes />
          <ToastContainer />
        </FavoritesProductsProvider>
      </ProductsOnCartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
