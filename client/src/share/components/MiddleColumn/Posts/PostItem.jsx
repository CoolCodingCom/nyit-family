import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import AttributeList from "./AttributeList";

import AvadarIcon from "./svg/avadar.svg";
import PostImage from "./svg/postimage.svg";

import "./PostItem.css";


const PostItem = (props) => {
  return (
    <div className="post__container">
      <div className="post__avadar">
        <NavLink to="/login" href="#">
          <img src={AvadarIcon} alt="AvadarIcon" />
        </NavLink>
      </div>
      <div className="post__body">
        <div className="post__profile">
          <div className="post__profile-username">
            <NavLink to={`/${props.userid}`} href="#">
              {props.username}
            </NavLink>
          </div>
          <div className="post__profile-info">
            {props.userid}·{props.timestamp}
          </div>
        </div>

        <div className="post__content">
          <div className="post__content-text">{props.text}</div>
          <div className="post__content-image">
          <NavLink to="/login" href="#">
            <img src={PostImage} alt="PostImage" />
          </NavLink>
          </div>
        </div>

        <div className="post__accessory">
          <AttributeList />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
