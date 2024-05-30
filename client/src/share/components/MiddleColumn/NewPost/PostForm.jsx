import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import AvadarIcon from "./svg/avadar.svg";
import "./PostForm.css";
import AccessoryList from "./AccessoryList";

const PostForm = () => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
    console.log(textareaRef.current.style.height);
  }, [message]);

  const classes = [];

  const textareaChangeHandler = (event) => {
    // setCount(event.target.value.length);
    setMessage(event.target.value);
  };

  return (
    <div className="postform__body">
      <NavLink to="/login" className="postform__navlink" href="#">
        <img className="icon" src={AvadarIcon} alt="AvadarIcon" />
      </NavLink>
      <form className="post_form" onSubmit={onsubmit}>
        <textarea
          type="text"
          placeholder="What is happening?!"
          value={message}
          rows={1}
          ref={textareaRef}
          onChange={textareaChangeHandler}
        />
        <div className="postform__accessroy-btn">
          <AccessoryList />
          <div className="postform__btn">
            <button type="submit" disabled="false">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
