import { Routes, Route } from "react-router-dom";
import { PageAdmin } from "../layout/PageAdmin";
import { Dashboard, Products, EditProduct, AddProduct } from "../pages/";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageAdmin />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/create" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Route>
    </Routes>
  );
}
