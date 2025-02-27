import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; 

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="text-lg">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
