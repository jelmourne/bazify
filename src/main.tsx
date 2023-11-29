import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import NavLayout from "./layout/NavLayout";
import SearchPage from "./pages/SearchPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavLayout />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  </BrowserRouter>
);
