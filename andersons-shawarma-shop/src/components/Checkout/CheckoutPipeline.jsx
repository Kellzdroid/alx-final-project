import React, { useState } from "react";
import OrderList from "./OrderList";
import DeliveryAddress from "./DeliveryAddress";
import PaymentMethod from "./PaymentMethod";
import OrderSuccess from "./OrderSuccess";
import { useCart } from "../../context/CartContext";

const CheckoutPipeline = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const { clearCart } = useCart();

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSuccess = () => {
    clearCart();
    nextStep();
  };

  return (
    <div className="fixed inset-0 bg-[#1f2629] bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-[#1F2629] text-[#D9D9D9] p-6 rounded w-full max-w-lg shadow-xl relative">
        {step === 1 && <OrderList onNext={nextStep} onClose={onClose} />}
        {step === 2 && <DeliveryAddress onNext={nextStep} onBack={prevStep} />}
        {step === 3 && (
          <PaymentMethod onNext={handleSuccess} onBack={prevStep} />
        )}
        {step === 4 && <OrderSuccess onClose={onClose} />}
      </div>
    </div>
  );
};

export default CheckoutPipeline;
