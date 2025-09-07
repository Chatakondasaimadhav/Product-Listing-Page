import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ProductContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Product not found</h2>
        <Link to="/" className="text-blue-600 underline">Go back to home</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-2">Category: {product.category}</p>
          <p className="text-xl font-semibold mb-2">₹{product.price}</p>
          <p className="mb-4">⭐ {product.rating} / 5</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-6">
        <Link to="/" className="text-blue-600 underline">← Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
