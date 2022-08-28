import { Routes, Route } from "react-router-dom";
import { Home, Preview, Cart, OrderHistory, Favorites } from "../pages/";

export function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Preview />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/Favorites" element={<Favorites />} />
    </Routes>
  );
}
