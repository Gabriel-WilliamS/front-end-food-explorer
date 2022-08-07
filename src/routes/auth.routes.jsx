import { Routes, Route } from "react-router-dom";
import { AdminRegister } from "../pages/AdminRegister";
import { ClientRegister } from "../pages/ClientRegister";
import { Login } from "../pages/Login";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<ClientRegister />} />
      <Route path="/admin/register" element={<AdminRegister />} />
    </Routes>
  );
}
