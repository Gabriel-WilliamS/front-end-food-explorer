import { Routes, Route } from "react-router-dom";
import { PageAdmin } from "../layout/PageAdmin";
import {
  Dashboard,
  Products,
  EditProduct,
  AddProduct,
  Categories,
  AddCategory
} from "../pages/";
import { EditCategory } from "../pages/EditCategory";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageAdmin />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/new" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/new" element={<AddCategory />} />
        <Route path="/categories/edit/:id" element={<EditCategory />} />
      </Route>
    </Routes>
  );
}
