import { useNavigate } from "react-router-dom";
import backArrowImg from "../../assets/backArrow.svg";
import { useEffect, useState } from "react";
import { getPostByAuthor } from "../../apis/post";

export default function ProfileHead({ profileInfo }) {
  const { id, name } = profileInfo;
  const [postsNum, setPostsNum] = useState(0);
  const navigate = useNavigate();
  function handleBackward() {
    navigate(-1);
  }

  function formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  }

  useEffect(() => {
    if (id) {
      getPostByAuthor(id)
        .then((data) => {
          setPostsNum(data.length);
        })
        .catch((error) => {
          console.error("Error fetching user posts:", error);
        });
    }
  }, [id]);

  return (
    <div className="middlecol__head profile__head">
      <div className="profile__head__back">
        <img
          src={backArrowImg}
          alt="Back arrow"
          onClick={handleBackward}
          className="back__button"
        />
      </div>

      <div className="profile__head__info">
        <div className="profile__name">{name}</div>
        <div className="posts__info">{formatNumber(postsNum)} posts</div>
      </div>
    </div>
  );
}
