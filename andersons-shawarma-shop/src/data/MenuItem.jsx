import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

export default function MenuItem({ image, title, price, options = [] }) {
  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState(options[0] || "");
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ title, option, price, quantity, image });
    toast.success(`${quantity} x ${option} (${title}) to cart!`);
  };

  return (
    <div className="bg-[#1f2629] text-[#d9d9d9] p-8 rounded shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <div className="rounded h-100 overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="text-xl font-night mb-3 text-left">{title}</h3>

      <div className="flex justify-between items-center mb-6">
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          className="bg-[#d9d9d9] text-[#1f2629] w-64 px-4 py-2 rounded outline-none"
        >
          {options.map((opt, index) => (
            <option key={index}>{opt}</option>
          ))}
        </select>

        <div className="flex flex-row gap-6 items-center">
          <label className="text-sm">Quantity :</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 h-8 bg-[#d9d9d9] text-[#1f2629] text-center rounded"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handleAddToCart}
          className="border border-[#d9d9d9] px-12 py-4 rounded-md hover:bg-[#d9d9d9] hover:text-[#1f2629] transition-colors duration-300"
        >
          Add to Cart
        </button>

        <div className="flex flex-row items-center gap-9">
          <p className="text-sm">Price :</p>
          <p className="text-lg font-semibold">₦{price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
