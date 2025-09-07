import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(ProductContext);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-bold hover:text-blue-300">
        🛍️ ShopSmart
      </Link>

      {/* Navigation Links (optional) */}
      <div className="space-x-4 hidden md:flex">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        <Link to="/about" className="hover:text-blue-300">About</Link>
        <Link to="/contact" className="hover:text-blue-300">Contact</Link>
      </div>

      {/* Cart Icon */}
      <div className="relative">
        <Link to="/cart" className="hover:text-blue-300">
          🛒 Cart
        </Link>
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {cart.length}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
