import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const FilterPanel = () => {
  const { setCategory, setSortBy } = useContext(ProductContext);

  return (
    <div className="flex gap-4 mb-4">
      <select onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded">
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
      </select>

      <select onChange={(e) => setSortBy(e.target.value)} className="p-2 border rounded">
        <option value="default">Sort By</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterPanel;
