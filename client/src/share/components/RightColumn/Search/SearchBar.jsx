import React, { useState } from "react";

import SearchIcon from "./svg/search.svg";

import "./SearchBar.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="search__wrap">
      <div className="search__inner">
        <img src={SearchIcon} />
        <input
          className="search__item"
          type="text"
          value={searchInput}
          onChange={handleChange}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
