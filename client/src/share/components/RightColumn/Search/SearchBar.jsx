import React, { useState } from "react";

import SearchIcon from "./svg/search.svg";

import "./SearchBar.css";
import PopList from "../../Elements/PopList";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const accountlist = [
    {
      userid: "Levi Zhu",
      onClickHandler: () => {
        // props.onDeleteShow();
      },
    },
    {
      userid: "Marco Shua",
      onClickHandler: () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        navigate("/login");
      },
    },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const ContentClearHandler = () => {
    setSearchInput('');
  }

  return (
    <>
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
          {searchInput.length > 0 && (
            <button
              type="button"
              className="search__cancel"
              onClick={ContentClearHandler}
            >
              ✕
            </button>
          )}
        </div>
      </div>
      {searchInput.length > 0 && (
        <PopList
          show
          isprofile
          nobackdrop
          list={accountlist}
          posTop={51.5}
          width={310}
          className="morelist__container"
          // onClick={props.onClick}
        />
      )}
    </>
  );
};

export default SearchBar;
