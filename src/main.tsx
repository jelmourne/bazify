import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </BrowserRouter>
);
