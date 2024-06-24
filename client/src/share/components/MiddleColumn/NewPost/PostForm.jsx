import React, { useState, useRef, useEffect, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import ImageUpload from "../../Elements/ImageUpload";
import AccessoryList from "./AccessoryList";
import { newPost } from "../../../../apis/post";
import AvadarIcon from "./svg/avadar.svg";
import "./PostForm.css";
import Pie from "../../Elements/Pie";


const PostForm = () => {
  const [message, setMessage] = useState("");
  const [mediaList, setMediaList] = useState([]);
  const textareaRef = useRef(null);
  const [isValid, setIsValid] = useState(false);
  const [mediaUploadState, setMediaUploadState] = useState(null);
  const [textPct, setTextPct] = useState(0);
  const mediaUploadRef = useRef();
  const navigateTo = useNavigate();

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
    const text = event.target.value;
    const pct = (text.length) * 100 / 280;
    setMessage(text);
    setTextPct(pct);

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

      const response = await newPost(formData);

      if (response.status >= 200 && response.status < 300) {
        setMediaList(mediaList => []);
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
            {message.length > 0 && <Pie percentage={textPct} colour={'blue'}/>}
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
