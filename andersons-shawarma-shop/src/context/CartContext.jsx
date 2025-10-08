import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

function getInitialCart() {
  try {
    const raw = localStorage.getItem("shawarma_cart");
    return raw ? JSON.parse(raw) : { items: [] };
  } catch (e) {
    return { items: [] };
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getInitialCart);

  useEffect(() => {
    localStorage.setItem("shawarma_cart", JSON.stringify(cart));
  }, [cart]);

  function addItem(product, qty = 1, option = null) {
    setCart((prev) => {
      // merge if same id and option
      const foundIdx = prev.items.findIndex(
        (it) => it.id === product.id && it.option === option
      );
      const items = [...prev.items];
      if (foundIdx >= 0) {
        items[foundIdx] = {
          ...items[foundIdx],
          qty: items[foundIdx].qty + qty,
        };
      } else {
        items.push({ ...product, qty, option });
      }
      return { items };
    });
  }

  function removeItem(id, option = null) {
    setCart((prev) => ({
      items: prev.items.filter((it) => !(it.id === id && it.option === option)),
    }));
  }

  function updateQty(id, qty, option = null) {
    setCart((prev) => ({
      items: prev.items.map((it) =>
        it.id === id && it.option === option ? { ...it, qty } : it
      ),
    }));
  }

  function clearCart() {
    setCart({ items: [] });
  }

  const value = { cart, addItem, removeItem, updateQty, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
