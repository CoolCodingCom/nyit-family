import React, { useState, useRef, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

import ImageUpload from "../../Elements/ImageUpload";
import AccessoryList from "./AccessoryList";
import AvadarIcon from "./svg/avadar.svg";
import "./PostForm.css";

const PostForm = () => {
  const [message, setMessage] = useState("");
  const [mediaList, setMediaList] = useState([]);
  const textareaRef = useRef(null);
  const [isValid, setIsValid] = useState(false);
  const [mediaUploadState, setMediaUploadState] = useState(null);
  const mediaUploadRef = useRef();

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

  const textareaChangeHandler = (event) => {
    setMessage(event.target.value);
    // just a temporarily simple validation method
    if (event.target.value.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const onPostSubmissionHandler = async (event) => {
    event.preventDefault();
    console.log("123");
    try {
      const formData = new FormData();
      formData.append("userId", "66478537d649d8bfa2785161");
      formData.append("username", "Levi Zhu");
      formData.append("content", message);
      mediaList.forEach((file) => formData.append("media", file));

      const response = await fetch(backendUrl + "/api/posts", {
        method: "POST",
        headers: {},
        body: formData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onInputHandler = (fileList) => {
    setMediaList(fileList);
  };

  return (
    <div className="postform__body">
      <NavLink to="/login" className="postform__navlink" href="#">
        <img className="icon" src={AvadarIcon} alt="AvadarIcon" />
      </NavLink>
      <form className="post_form" onSubmit={onPostSubmissionHandler}>
        <div className="postform__contentbody">
          <textarea
            type="text"
            placeholder="What is happening?!"
            value={message}
            rows={1}
            ref={textareaRef}
            onChange={textareaChangeHandler}
          />
          <ImageUpload ref={mediaUploadRef} onInput={onInputHandler} />
        </div>
        <div className="postform__accessroy-btn">
          <AccessoryList
            onClickMedia={
              mediaUploadRef.current && mediaUploadRef.current.pickMedia
            }
          />
          <div className="postform__btn">
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
