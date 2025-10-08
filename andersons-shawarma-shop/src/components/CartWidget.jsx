import React, { useState } from "react";
import { useCart } from "../context/CartContext";

import { LuShoppingBag } from "react-icons/lu";

function CartWidget() {
  const { cart, removeItem, updateQty, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const total = cart.items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative p-2 rounded border-gray-600"
      >
        <LuShoppingBag />
        <span className="ml-2 text-sm">{cart.items.length}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-gray-900 border border-gray-800 p-4 rounded card-shadow z-50">
          <h4 className="font-semibold mb-2">Order List</h4>
          <div className="space-y-3 max-h-60 overflow-auto">
            {cart.items.leghth === 0 && (
              <div className="text-sm text-gray-400">Cart is empty</div>
            )}
            {cart.items.map((it, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{it.title}</div>
                  <div className="text-xs text-gray-400">{it.option ?? ""}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQty(it.id, Math.max(1, it.qty - 1), it.option)
                    }
                    className="px-2 border rounded"
                  >
                    -
                  </button>
                  <div className="px-2">{it.qty}</div>
                  <button
                    onClick={() => updateQty(it.id, it.qty + 1, it.option)}
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 border-t border-gray-800 pt-3 flex items-center justify-between">
            <div>
              <div className="text-sm">Total</div>
              <div className="font-semibold">₦{total.toFixed(2)}</div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => alert("Checkout - demo")}
                className="px-3 py-1 bg-accent text-black rounded"
              >
                Checkout
              </button>
              <button onClick={clearCart} className="px-3 py-1 border rounded">
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartWidget;
