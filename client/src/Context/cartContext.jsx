import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartProduct, setCartProduct] = useState([]);

  const addToCart = (product) => {
    setCartProduct((prevCart) => {

      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {

        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {

        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartProduct, setCartProduct, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};