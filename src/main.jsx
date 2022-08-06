import React from "react";
import ReactDOM from "react-dom/client";
import { ClientLogin } from "../src/pages/ClientLogin";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global";
import theme from "../src/styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ClientLogin />
    </ThemeProvider>
  </React.StrictMode>
);
