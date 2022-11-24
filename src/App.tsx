import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/producstPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
