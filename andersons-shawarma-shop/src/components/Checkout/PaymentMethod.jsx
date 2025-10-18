import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { FaCcVisa } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";

const PaymentMethod = ({ onNext, onBack }) => {
  const [paymentType, setPaymentType] = useState("cash");
  const [saveCard, setSaveCard] = useState(false);
  const { total } = useCart();

  return (
    <div className="bg-[#1f2629] font-manrope text-[#D9D9D9] p-6 md:p-10 rounded w-full max-w-3xl mx-auto border border-[#D9D9D9]/20 shadow-lg">
      <h2 className="text-center border-b border-[#d9d9d9]/70 text-xl md:text-xl font-night mb-10 tracking-widest">
        PAYMENT METHOD
      </h2>

      <div className="space-y-8 text-lg">
        <label className="flex items-center justify-between cursor-pointer border-b border-[#D9D9D9] pb-4">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentType === "cash"}
              onChange={() => setPaymentType("cash")}
              className="accent-red-500"
            />
            <span className="font-medium">Cash On Delivery</span>
          </div>
        </label>

        <label className="flex flex-col gap-5 cursor-pointer border-b border-[#D9D9D9] pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentType === "card"}
                onChange={() => setPaymentType("card")}
                className="accent-red-500"
              />
              <span className="font-medium">Pay With Card</span>
            </div>

            <div className="flex gap-2">
              <FaCcVisa />
              <SiMastercard />
            </div>
          </div>

          {paymentType === "card" && (
            <div className="space-y-6 mt-4">
              <div className="flex items-center justify-between border-b border-[#D9D9D9]/70 pb-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="bg-transparent w-full outline-none text-[#D9D9D9]/70"
                />
                <FaLock className="text-[#D9D9D9] ml-2" />
              </div>

              <div className="flex justify-between items-center gap-6">
                <div className="flex items-center justify-between border-b border-[#D9D9D9]/70 pb-2 w-1/2">
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="bg-transparent w-full outline-none text-[#D9D9D9]/70"
                  />
                  <FaLock className="text-[#D9D9D9] ml-2" />
                </div>

                <div className="flex items-center justify-between border-b border-[#D9D9D9]/70 pb-2 w-1/2">
                  <input
                    type="text"
                    placeholder="CVV/CVC"
                    className="bg-transparent w-full outline-none text-[#D9D9D9]/70"
                  />
                  <FaLock className="text-[#D9D9D9] ml-2" />
                </div>
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={saveCard}
                  onChange={() => setSaveCard(!saveCard)}
                  className="accent-red-500"
                />
                Save card details for future payments
              </label>
            </div>
          )}
        </label>
      </div>

      <div className="mt-10 text-lg space-y-2 pt-4">
        <p className="flex justify-between">
          <span>Subtotal</span>
          <span>₦{total.toLocaleString()}.00</span>
        </p>
        <p className="flex justify-between">
          <span>Delivery Fee</span>
          <span>₦750.00</span>
        </p>
        <p className="flex justify-between font-semibold border-t border-[#D9D9D9] pt-3">
          <span>Total</span>
          <span>₦{(total + 750).toLocaleString()}.00</span>
        </p>
      </div>

      <div className="flex justify-between mt-12">
        <button
          onClick={onBack}
          className="border border-[#D9D9D9] px-8 py-3 rounded-md hover:bg-[#D9D9D9] hover:text-[#1F2629] transition-all"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="border border-[#D9D9D9] px-8 py-3 rounded-md hover:bg-[#D9D9D9] hover:text-[#1F2629] transition-all"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
