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
import { AuthProvider } from "./hooks/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProductsOnCartProvider>
        <FavoritesProductsProvider>
          <GlobalStyles />
          <AuthProvider>
            <Routes />
          </AuthProvider>
          <ToastContainer autoClose={3000} />
        </FavoritesProductsProvider>
      </ProductsOnCartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
