import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ProductContext);

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p>₹{product.price}</p>
      <p>⭐ {product.rating}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white px-4 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
