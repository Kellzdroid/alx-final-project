import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function MenuItem({ image, title, price, options = [] }) {
  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState(options[0] || "");
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ title, option, price, quantity, image });
    toast.success(`${quantity} x ${option} (${title}) added to cart!`);
  };

  return (
    <div className="bg-[#1f2629] text-[#d9d9d9] border-1 p-6 sm:p-8 rounded shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <div className="rounded h-100 overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-100 sm:h-100 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="text-lg sm:text-xl font-night mb-3 text-left">{title}</h3>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 mb-6">
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          className="bg-[#d9d9d9] text-[#1f2629] w-full sm:w-64 px-3 py-2 rounded outline-none"
        >
          {options.map((opt, index) => (
            <option key={index}>{opt}</option>
          ))}
        </select>

        <div className="flex flex-row justify-between sm:justify-normal gap-4 items-center">
          <label className="text-sm">Qantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 h-8 bg-[#d9d9d9] text-[#1f2629] text-center rounded"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={handleAddToCart}
          className="border border-[#d9d9d9] w-full sm:w-auto px-6 sm:px-12 py-3 sm:py-4 font-semibold rounded-md hover:bg-[#d9d9d9] hover:text-[#1f2629] transition-colors duration-300"
        >
          Add to Cart
        </button>

        <div className="flex flex-row items-center gap-4 sm:gap-9">
          <p className="text-sm">Price :</p>
          <p className="text-lg font-semibold">₦{price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
