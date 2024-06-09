import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import AttributeList from "./AttributeList";
import MediaArrange from "./MediaArrange";
import MoreList from "./MoreList";
import AvadarIcon from "./svg/avadar.svg";

import "./PostItem.css";


const PostItem = (props) => {
  const [moreIsShow, setMoreIsShow] = useState(false);

  const showListHandler = () => {
    setMoreIsShow((moreIsShow) => !moreIsShow);
  };

  return (
    <div className="post__container">
      <div className="post__avadar">
        <NavLink to="/login" href="#">
          <img src={AvadarIcon} alt="AvadarIcon" />
        </NavLink>
      </div>
      <div className="post__body">
        <div className="post__extension">
          <button className="post__extension-show-button" onClick={showListHandler}>
            <span>...</span>
          </button>
          {moreIsShow && (
            <MoreList show={moreIsShow} onClick={showListHandler}/>
          )}
        </div>
        <div className="post__profile">
          <div className="post__profile-username">
            <NavLink to={`/${props.userid}`} href="#">
              {props.username}
            </NavLink>
          </div>
          <div className="post__profile-info">
            <span>@</span>
            {props.userid}·{props.timestamp}
          </div>
        </div>
        <div className="post__content">
          <div className="post__content-text">{props.text}</div>
          <MediaArrange medialist={props.medialist} />
        </div>

        <div className="post__accessory">
          <AttributeList />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
