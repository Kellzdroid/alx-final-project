import React, { createContext, useContext, useState, useEffect } from "react";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem("checkoutOpen");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("checkoutOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  const openCheckout = () => setIsOpen(true);
  const closeCheckout = () => setIsOpen(false);

  return (
    <CheckoutContext.Provider value={{ isOpen, openCheckout, closeCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
