import React, { useState, useEffect } from "react";

import SearchIcon from "./svg/search.svg";

import "./SearchBar.css";
import PopList from "../../Elements/PopList";
import { getUsersByQueryKey } from "../../../../apis/user";
import OutsideClickHandler from "../../Elements/OutsideClickHandler";

const SearchBar = (props) => {
  const [showSearchList, setShowSearchList] = useState(false);
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

  const onInputFocus = () => {
    setShowSearchList(true);
  };

  const onOutsideClickHandler = () => {
    setShowSearchList(false);
  };

  return (
    <div className="search__wrap">
      <OutsideClickHandler onOutsideClick={onOutsideClickHandler}>
        <div className="search__inner">
          <img src={SearchIcon} />
          <input
            className="search__item"
            type="text"
            value={searchInput}
            onChange={handleChange}
            onFocus={onInputFocus}
            placeholder="Search"
          />
          {searchInput.length > 0 && showSearchList && (
            <button
              type="button"
              className="search__cancel"
              onClick={ContentClearHandler}
            >
              ✕
            </button>
          )}
        </div>
        {searchInput.length > 0 && userList && (
          <PopList
            show={showSearchList}
            isprofile
            nobackdrop
            list={userList}
            posTop={51.5}
            width={310}
          />
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default SearchBar;
