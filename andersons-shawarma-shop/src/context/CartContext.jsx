import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const newItem = {
      title: item.title,
      option: item.option || "Regular",
      price: Number(item.price) || 0,
      quantity: Number(item.quantity) || 1,
      image: item.image || "/public/images/minichiken.jpg",
    };

    setCartItems((prev) => {
      const existing = prev.find(
        (p) => p.title === newItem.title && p.option === newItem.option
      );

      if (existing) {
        return prev.map((p) =>
          p.title === newItem.title && p.option === newItem.option
            ? { ...p, quantity: p.quantity + newItem.quantity }
            : p
        );
      }

      return [...prev, newItem];
    });
  };

  const removeFromCart = (title, option) => {
    setCartItems((prev) =>
      prev.filter((p) => !(p.title === title && p.option === option))
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
