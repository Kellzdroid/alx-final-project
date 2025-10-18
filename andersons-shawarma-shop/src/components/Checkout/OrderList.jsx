import React from "react";
import { useCart } from "../../context/CartContext";
import { MdDelete } from "react-icons/md";

const OrderList = ({ onNext, onClose }) => {
  const { cartItems, total, removeFromCart } = useCart();

  return (
    <div className="font-manrope pace-y-5">
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-[#d9d9d9] hover:text-white text-xl"
      >
        ✕
      </button>

      <h2 className="text-center text-xl text-[#d9d9d9] border-b border-[#d9d9d9]/40 font-night mb-6">
        ORDER LIST
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-center font-manrope text-[#d9d9d9] mt-10">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="space-y-3 border-t mt-6 max-h-[65vh] overflow-y-auto">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#1f2629] p-3 rounded"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="flex-1 ml-3">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-[#d9d9d9/70]">{item.option}</p>
                  <p className="text-sm">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.title, item.option)}
                  className="text-red-400 hover:text-red-500"
                >
                  <MdDelete size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between border-t items-center font-semibold mt-6">
            <p>Total:</p>
            <p>₦{total.toLocaleString()}</p>
          </div>

          <button
            onClick={onNext}
            className="w-full border border-[#d9d9d9] bg-[#1f2629] mt-6 py-3 rounded-lg hover:bg-[#d9d9d9] hover:text-[#1f2629] font-semibold"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default OrderList;
