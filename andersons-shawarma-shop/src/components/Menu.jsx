import React, { useState } from "react";
import { MENU } from "../data/menuData";
import { useCart } from "../context/CartContext";

function MenuCard({ item }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [opt, setOpt] = useState(item.options?.[0] ?? null);

  return (
    <>
      <div className="container p-4">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-100  mx-auto rounded mb-3"
        />

        <div className="grid grid-cols-2 flex-row">
          {item.options && (
            <select
              className="mt-2 p-2 bg-[#1F2629] border border-[#D9D9D9] rounded w-full"
              value={opt}
              onChange={(e) => setOpt(e.target.value)}
            >
              {item.options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-2 border rouded"
            >
              -
            </button>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="px-2 border rouded"
            >
              +
            </button>
          </div>

          <div className="text-right">
            <div className="text-sm">Price:</div>
            <div className="font-semibold">₦{item.price.toFixed(2)}</div>
          </div>
        </div>
        <button
          onClick={() =>
            addItem(
              { id: item.id, title: item.title, price: item.price },
              qty,
              opt
            )
          }
          className="mt-4 w-full py2 bg-accent rounded"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

function Menu() {
  return (
    <section id="menu" className="container mx-auto px-6 md:px-2 py-16">
      <h2 className="text-center text-[#d9d9d9] font-night text-3xl mb-8">
        OUR MENU
      </h2>
      <div className="grid sm:grid-cols-1 text-[#d9d9d9] lg:grid-cols-2 gap-6">
        {MENU.map((m) => (
          <MenuCard key={m.id} item={m} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
