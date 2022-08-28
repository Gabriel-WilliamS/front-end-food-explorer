import { Routes, Route } from "react-router-dom";
import { Dashboard, Products } from "../pages/";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
