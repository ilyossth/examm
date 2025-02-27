import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "iPhone 13", price: 999, image: "/iphone.png" },
  { id: 2, name: "MacBook Pro", price: 1999, image: "/macbook.png" },
  { id: 3, name: "Canon EOS", price: 899, image: "/camera.png" },
];

export default function Shop() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Shop</h2>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
