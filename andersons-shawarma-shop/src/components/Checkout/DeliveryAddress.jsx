import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

const DeliveryAddress = ({ onNext, onBack }) => {
  const [deliveryType, setDeliveryType] = useState("home");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const { total } = useCart();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    if (deliveryType === "home" && !formData.address.trim()) {
      alert("Please fill out your address before continuing.");
      return;
    }
    onNext();
  };

  return (
    <div className="bg-[#1F2629] text-[#D9D9D9] font-manrope p-6 md:p-10 rounded w-full max-w-3xl mx-auto">
      <h2 className="text-center border-b border-[#d9d9d9]/70 text-xl md:text-xl font-night mb-8">
        DELIVERY ADDRESS
      </h2>

      <div className="flex justify-center gap-6 mb-10">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="delivery"
            value="home"
            checked={deliveryType === "home"}
            onChange={() => setDeliveryType("home")}
            className="accent-red-500"
          />
          <span
            className={`text-sm md:text-base ${
              deliveryType === "home" ? "text-red-400 font-semibold" : ""
            }`}
          >
            Home Delivery
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="delivery"
            value="pickup"
            checked={deliveryType === "pickup"}
            onChange={() => setDeliveryType("pickup")}
            className="accent-red-500"
          />
          <span
            className={`text-sm md:text-base ${
              deliveryType === "pickup" ? "text-red-400 font-semibold" : ""
            }`}
          >
            Pick Up Point
          </span>
        </label>
      </div>

      {deliveryType === "home" ? (
        <>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full text-md text-[#d9d9d9]/50 border-b border-[#D9D9D9]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full text-md text-[#d9d9d9]/50 border-b border-[#D9D9D9]"
              />
            </div>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Input Your Address"
              className="w-full text-md text-[#d9d9d9]/50 border-b border-[#D9D9D9]"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full text-md border-b border-[#D9D9D9]"
              >
                <option value="">City</option>
                <option>Enugu</option>
                <option>Lagos</option>
                <option>Abuja</option>
              </select>

              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                placeholder="Zip Code"
                className="w-full text-md border-b border-[#D9D9D9]"
              />

              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full text-md border-b border-[#D9D9D9]"
              >
                <option value="">Country</option>
                <option>Nigeria</option>
                <option>Ghana</option>
              </select>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" className="accent-[#D9D9D9]" />
              <label className="text-md">
                Save for faster checkout next time
              </label>
            </div>

            <div className="mt-6 text-md space-y-2">
              <p className="flex justify-between">
                <span>Additional Delivery Charge</span>
                <span className="font-semibold">₦750.00</span>
              </p>
              <p className="flex justify-between border-t border-[#d9d9d9] mt-2 font-bold">
                <span>Total</span>
                <span>₦{(total + 750).toLocaleString()}.00</span>
              </p>
            </div>
          </form>
        </>
      ) : (
        <div className="space-y-8 text-md">
          {[
            {
              id: 1,
              name: "Ajah",
              address: "No 1. Building, Anywhere Street, VI",
            },
            {
              id: 2,
              name: "Victoria Island",
              address: "No 1. Building, Anywhere Street, VI",
            },
            {
              id: 3,
              name: "Lekki Phase II",
              address: "No 1. Building, Anywhere Street, VI",
            },
          ].map((loc) => (
            <label
              key={loc.id}
              className="flex mb-3 font-manrope py-3 border-t border-[#d9d9d9] items-start gap-10 cursor-pointer"
            >
              <input
                type="radio"
                name="pickupPoint"
                value={loc.name}
                className="accent-red-500 mt-5"
              />
              <div>
                <p className="w-full text-xl text-left font-semibold">
                  {loc.name}
                </p>
                <p className="text-sm opacity-80">{loc.address}</p>
              </div>
            </label>
          ))}
        </div>
      )}

      <div className="flex justify-between mt-12">
        <button
          onClick={onBack}
          className="border border-[#D9D9D9] text-[#D9D9D9] px-6 py-3 rounded-md hover:bg-[#D9D9D9] hover:text-[#1F2629] transition-all"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          className="border border-[#D9D9D9] text-[#D9D9D9] px-6 py-3 rounded-md hover:bg-[#D9D9D9] hover:text-[#1F2629] transition-all"
        >
          Continue To Payment
        </button>
      </div>
    </div>
  );
};

export default DeliveryAddress;
