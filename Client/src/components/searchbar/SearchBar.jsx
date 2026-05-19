import { useState } from "react";
import "./SearchBar.scss";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const type = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: "",
    maxPrice: "",
  });

  const navigate = useNavigate();

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const { type, city, minPrice, maxPrice } = query;
    navigate(
      `/list?type=${type}&city=${city}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  };

  return (
    <>
      <div className="searchBar">
        <div className="type">
          {type.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => switchType(item)}
              className={query.type === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="city"
            placeholder="City Location"
            value={query.city}
            onChange={handleChange}
          />
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            min={0}
            value={query.minPrice}
            onChange={handleChange}
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            min={0}
            value={query.maxPrice}
            onChange={handleChange}
          />
          <button type="submit">
            <img src="./search.png" alt="Search" />
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;

