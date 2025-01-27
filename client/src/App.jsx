import React from "react";
import { useState } from "react";
import Products from "./components/shared/Products";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import ProductDetail from "./screens/ProductDetail.jsx";
import Cart from "./screens/Cart.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/details" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
