import React, { useState, useRef, useEffect, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import ImageUpload from "../../Elements/ImageUpload";
import AccessoryList from "./AccessoryList";
import { newPost } from "../../../../apis/post";
import AvadarIcon from "./svg/avadar.svg";
import "./PostForm.css";
import Pie from "../../Elements/Pie";
import { useUserInfo } from "../../../context/user-info-context";

const PostForm = () => {
  const [message, setMessage] = useState("");
  const [wrappedmMessage, setwrappedmMessage] = useState("");
  const [mediaList, setMediaList] = useState([]);
  const textareaRef = useRef(null);
  const [isValid, setIsValid] = useState(false);
  const [mediaUploadState, setMediaUploadState] = useState(null);
  const [textPct, setTextPct] = useState(0);
  const [leftChar, setLeftChar] = useState(280);
  const mediaUploadRef = useRef();
  const navigateTo = useNavigate();
  const userInfo = useUserInfo();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
    // console.log(textareaRef.current.style.height);
  }, [message]);

  useEffect(() => {
    setMediaUploadState(mediaUploadRef.current);
  }, [mediaUploadRef]);

  useEffect(() => {
    if (leftChar < 0) {
      setIsValid(false);
    } else {
      if (message.length > 0 || mediaList.length > 0) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  }, [message, mediaList]);

  const textareaChangeHandler = (event) => {
    const text = event.target.value;
    const pct = (text.length * 100) / 280;
    const leftchar = 280 - text.length;

    const wrappedText = text.split("").map((char, index) =>
      index >= 280 ? (
        <span key={index} style={{ backgroundColor: "rgba(255, 0, 0, 0.2)" }}>
          {char}
        </span>
      ) : (
        <span key={index}>{char}</span>
      )
    );

    setMessage(text);
    setwrappedmMessage(wrappedText);
    setTextPct(pct);
    setLeftChar(leftchar);
  };

  const onPostSubmissionHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("userId", userInfo.id);
      formData.append("username", userInfo.name);
      formData.append("content", message);
      mediaList.forEach((file) => formData.append("media", file));

      const response = await newPost(formData);

      if (response.status >= 200 && response.status < 300) {
        setMediaList((mediaList) => []);
        navigateTo(0); // better solution? I just don't want to reload all this page.
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onInputHandler = (fileList) => {
    setMediaList(fileList);
  };

  return (
    <div className="postform__body">
      <NavLink to={`/${userInfo.id}`} className="postform__navlink" href="#">
        <img className="icon" src={userInfo.image} alt="AvadarIcon" />
      </NavLink>
      <form className="post_form" onSubmit={onPostSubmissionHandler}>
        <div className="postform__contentbody">
          <div className="textarea__container">
            <div className="textarea__outputarea">{wrappedmMessage}</div>
            <textarea
              type="text"
              placeholder="What is happening?!"
              rows={1}
              value={message}
              ref={textareaRef}
              onChange={textareaChangeHandler}
            />
          </div>
          <ImageUpload ref={mediaUploadRef} onInput={onInputHandler} />
        </div>
        <div className="postform__accessroy-btn">
          <AccessoryList
            mediaUpperLimit={mediaList.length >= 4 ? true : false}
            onClickMedia={
              mediaUploadRef.current && mediaUploadRef.current.pickMedia
            }
          />
          <div className="postform__btn">
            {message.length > 0 && (
              <Pie
                radius={leftChar > 20 ? 10 : 14}
                percentage={textPct}
                colour={
                  leftChar > 20 ? "blue" : leftChar > 0 ? "orange" : "red"
                }
                leftChar={leftChar}
              />
            )}
            <button type="submit" disabled={!isValid}>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
