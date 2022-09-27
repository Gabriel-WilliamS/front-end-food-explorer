import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { ClientRoutes } from "./client.routes";
import { AdminRoutes } from "./admin.routes";
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? (
        user.is_admin ? (
          <AdminRoutes />
        ) : (
          <ClientRoutes />
        )
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
}
