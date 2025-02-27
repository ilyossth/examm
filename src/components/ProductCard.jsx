import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h3 className="text-xl font-bold mt-4">{product.name}</h3>
      <p className="text-lg text-gray-600">${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
