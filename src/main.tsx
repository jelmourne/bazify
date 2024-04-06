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
import DashboardScreen from "./pages/DashboardScreen";
import ShopScreen from "./pages/ShopScreen";
import CreateScreen from "./pages/CreateScreen";
import ExploreScreen from "./pages/ExploreScreen";
import FooterLayout from "./layout/FooterLayout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/products" element={<ExploreScreen />} />
        <Route path="/products/{id}" element={<ProductScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="cart" element={<CartScreen />} />
        <Route path="/shop" element={<DashboardScreen />} />
        <Route path="/shop/:id" element={<ShopScreen />} />
        <Route path="/shop/create" element={<CreateScreen />} />
      </Routes>
    </BrowserRouter>
    <FooterLayout />
  </Provider>
);
