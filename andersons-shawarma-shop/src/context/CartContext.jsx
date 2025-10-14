import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (i) => i.title === item.title && i.option === item.option
      );

      if (existingItem) {
        return prevCart.map((i) =>
          i.title === item.title && i.option === item.option
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
