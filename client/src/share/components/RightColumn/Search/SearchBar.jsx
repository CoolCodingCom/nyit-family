import React, { useState, useEffect } from "react";

import SearchIcon from "./svg/search.svg";

import "./SearchBar.css";
import PopList from "../../Elements/PopList";
import { getUsersByQueryKey } from "../../../../apis/user";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [userList, setUserList] = useState();

  useEffect(() => {
    if (searchInput.length > 0) {
      getUsersByQueryKey(searchInput)
        .then((data) => {
          setUserList(data.users);
        })
        .catch((err) => {
          console.error("Error fetching users:", err);
        });
    } else {
      setUserList();
    }
    console.log(userList);
  }, [searchInput]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const ContentClearHandler = () => {
    setSearchInput("");
  };

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
      {searchInput.length > 0 && userList && (
        <PopList
          show
          isprofile
          nobackdrop
          list={userList}
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
