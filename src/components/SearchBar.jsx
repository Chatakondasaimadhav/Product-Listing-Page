import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const SearchBar = () => {
  const { setSearchTerm } = useContext(ProductContext);

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="p-2 border rounded w-full"
    />
  );
};

export default SearchBar;
