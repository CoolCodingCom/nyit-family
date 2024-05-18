import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import AvadarIcon from "./svg/avadar.svg";
import "./PostItem.css";
import AccessoryList from "./AccessoryList";

const PostItem = (props) => {
  return (
    <div className="postform__body">
      <div>
        <NavLink to="/login" className="postform__navlink" href="#">
          <img className="icon" src={AvadarIcon} alt="AvadarIcon" />
        </NavLink>
        <NavLink to={`/${props.userid}`} className="postform__navlink" href="#">
          {props.username}
        </NavLink>
        {props.id}
        {props.time}
      </div>
      <div>
        <NavLink to="/login" className="postform__navlink" href="#">
          <img className="icon" src={AvadarIcon} alt="AvadarIcon" />
        </NavLink>
        <div className="postform__accessroy-btn">
          <AccessoryList />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
