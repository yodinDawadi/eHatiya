import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <StrictMode>
      <App />
    </StrictMode>
    </CartProvider>
);
