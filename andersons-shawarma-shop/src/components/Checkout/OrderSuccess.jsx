import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const OrderSuccess = ({ onClose }) => {
  const navigate = useNavigate();
  const { cartItems, total } = useCart();

  const handleTrack = () => {
    navigate("/orders");
  };

  return (
    <div className="bg-[#1F2629] font-manrope text-[#D9D9D9] max-w-3xl mx-auto flex flex-col items-center justify-center px-6 py-12 text-center">
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-[#d9d9d9] hover:text-white text-xl"
      >
        ✕
      </button>

      <img
        src="/public/images/eating.jpg"
        alt="order success"
        className="w-64 mb-6"
      />

      <h2 className="text-3xl font-bold mb-3">Order Successfully Placed!</h2>
      <p className="text-lg text-[#d9d9d9]/70 mb-8 max-w-md">
        Your order has been successfully placed and is being processed for
        delivery.
      </p>

      <button
        onClick={handleTrack}
        className="bg-[#D9D9D9] border-[#d9d9d9] border text-[#1F2629] font-semibold px-10 py-3 rounded hover:bg-[#d9d9d9] transition-all"
      >
        Track Your Order
      </button>
    </div>
  );
};

export default OrderSuccess;
