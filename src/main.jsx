import React from "react";
import ReactDOM from "react-dom/client";
import { ClientLogin } from "../src/pages/ClientLogin";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global";
import theme from "../src/styles/theme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <ToastContainer />
    <ClientLogin />
  </ThemeProvider>
);
