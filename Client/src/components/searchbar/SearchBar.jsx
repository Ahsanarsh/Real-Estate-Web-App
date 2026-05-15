import { useState } from "react";
import "./SearchBar.scss";

function SearchBar() {
  const type = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchtype = (val) => {
    setQuery({ ...query, type: val });
  };
  return (
    <>
      <div className="searchBar">
        <div className="type">
          {type.map((item) => (
            <button
              key={item}
              onClick={() => switchtype(item)}
              className={query.type === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>
        <form action="">
          <input type="text" placeholder="City Location" />
          <input type="text" placeholder="Min Price" />
          <input type="text" placeholder="Max Price" />
          <button>
            <img src="./search.png" alt="" />
          </button>
        </form>
      </div>
    </>
  );
}
export default SearchBar;
