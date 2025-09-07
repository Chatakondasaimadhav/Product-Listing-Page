import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import Cart from "../components/Cart";

const Home = () => {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-3">
        <SearchBar />
        <FilterPanel />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Home;
