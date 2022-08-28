import { Routes, Route } from "react-router-dom";
import { AdminRegister, ClientRegister, Login } from "../pages";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<ClientRegister />} />
      <Route path="/admin/register" element={<AdminRegister />} />
    </Routes>
  );
}
