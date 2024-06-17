import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { useScroll } from "../../../context/scroll-context.jsx";
import AttributeList from "./AttributeList";
import MediaArrange from "./MediaArrange";
import MoreList from "./MoreList";
import Modal from "../../Elements/Modal";
import Nbutton from "../../Elements/Nbutton";
import AvadarIcon from "./svg/avadar.svg";

import "./PostItem.css";



const PostItem = (props) => {
  const [moreIsShow, setMoreIsShow] = useState(false);
  const [modalIsShow, setModalIsShow] = useState(false);
  const { setIsScrollDisabled } = useScroll();

  const showListHandler = () => {
    setMoreIsShow((moreIsShow) => !moreIsShow);
  };

  const onDeleteShowHandler = () => {
    setIsScrollDisabled(true);
    showListHandler();
    setModalIsShow((modalIsShow) => !modalIsShow);
  };

  const showModalHandler = () => {
    setModalIsShow((modalIsShow) => !modalIsShow);
    showListHandler();
    setIsScrollDisabled(false);
  };

  const deleteConfirmHandler = async () => {
    
  }

  return (
    <React.Fragment>
      {modalIsShow && (
        <Modal
          show={modalIsShow}
          onClick={showModalHandler}
          footer={
            <React.Fragment>
              <Nbutton onClick={deleteConfirmHandler} danger>Delete</Nbutton>
              <Nbutton onClick={showModalHandler}>Cancel</Nbutton>
            </React.Fragment>
          }
        >
          <h2>Delete post?</h2>
          <p>
            This can't be undone and it will be removed from your profile, the
            timeline of any accounts that follow you, and from search results.
          </p>
        </Modal>
      )}
      <div className="post__container">
        <div className="post__avadar">
          <NavLink to="/login" href="#">
            <img src={AvadarIcon} alt="AvadarIcon" />
          </NavLink>
        </div>
        <div className="post__body">
          <div className="post__extension">
            <button
              className="post__extension-show-button"
              onClick={showListHandler}
            >
              <span>...</span>
            </button>
            {moreIsShow && (
              <MoreList
                show={moreIsShow}
                onClick={showListHandler}
                onDeleteShow={onDeleteShowHandler}
              />
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
    </React.Fragment>
  );
};

export default PostItem;
