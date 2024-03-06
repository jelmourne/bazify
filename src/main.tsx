import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomeScreen";
import SearchPage from "./pages/SearchScreen";
import ProductScreen from "./pages/ProductScreen";
import OrderScreen from "./pages/OrderScreen";
import CartScreen from "./pages/CartScreen";
import { Provider } from "react-redux";
import { store } from "./config/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
