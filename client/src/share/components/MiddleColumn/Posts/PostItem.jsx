import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { useScroll } from "../../../context/scroll-context.jsx";
import { deletePost } from "../../../../apis/post.js";
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
    try {
      setModalIsShow((modalIsShow) => !modalIsShow);
      setIsScrollDisabled(false);

      const res = await deletePost(props.id);
      props.onDelete(props.id);
    } catch (error) {
      console.log(error);
    }
  };

  function formatTimestamp(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);

    const isToday = date.toDateString() === now.toDateString();
    const isThisYear = date.getFullYear() === now.getFullYear();

    if (!isThisYear) {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } else if (!isToday) {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } else {
      const diffInSeconds = Math.floor((now - date) / 1000);
      if (diffInSeconds < 60) {
        return `${diffInSeconds}s`;
      } else if (diffInSeconds < 3600) {
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        return `${diffInMinutes}m`;
      } else {
        const diffInHours = Math.floor(diffInSeconds / 3600);
        return `${diffInHours}h`;
      }
    }
  }

  return (
    <React.Fragment>
      {modalIsShow && (
        <Modal
          show={modalIsShow}
          onClick={showModalHandler}
          footer={
            <React.Fragment>
              <Nbutton onClick={deleteConfirmHandler} danger>
                Delete
              </Nbutton>
              <Nbutton onClick={showModalHandler}>Cancel</Nbutton>
            </React.Fragment>
          }
        >
          <h4 className="deletepost__header">Delete post?</h4>
          <p className="deletepost__content">
            This can't be undone and it will be removed from your profile, the
            timeline of any accounts that follow you, and from search results.
          </p>
        </Modal>
      )}
      <div className="post__container">
        <div className="post__avadar">
          <NavLink to={`/${props.userId}`} href="#">
            <img src={props.userImage} alt="AvadarIcon" />
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
              <NavLink to={`/${props.userId}`} href="#">
                {props.username}
              </NavLink>
            </div>
            <div className="post__profile-info">
              <span>@</span>
              {props.userId}·{formatTimestamp(props.timestamp)}
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
