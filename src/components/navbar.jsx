import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">PedroTech Shop</h1>
      <div>
        <Link to="/shop" className="mx-2">Shop</Link>
        <Link to="/contact" className="mx-2">Contact</Link>
        <Link to="/cart" className="mx-2">🛒 Cart</Link>
      </div>
    </nav>
  );
}
