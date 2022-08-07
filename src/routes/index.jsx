import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { ClientRoutes } from "./client.routes";

export function Routes() {
  return <BrowserRouter>{<ClientRoutes />}</BrowserRouter>;
}
