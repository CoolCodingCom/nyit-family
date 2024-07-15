import calendarImg from "../../assets/calendar.svg";
import testImg from "./testImg.jpeg";
import testAvatar from "./testAvatar.jpg";
import testAvatar2 from "./testAvatar2.jpg";
import testAvatar3 from "./testAvatar3.jpg";
import testAvatar4 from "./testAvatar4.jpg";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { mapMonthname } from "../../utils/util";
import { useUserInfo } from "../../share/context/user-info-context";
import EditProfile from "./EditProfile";

export default function ProfileHeader({
  profileInfo: { id, name, createdAt, image },
}) {
  const userInfo = useUserInfo();

  const style = {
    backgroundImage: `url(${testImg})`,
  };

  function formatDate() {
    if (createdAt) {
      const year = new Date(createdAt).getFullYear();
      const monthIndex = new Date(createdAt).getMonth();
      const month = mapMonthname(monthIndex);
      return month + " " + year;
    } else {
      return "unknown";
    }
  }

  return (
    <div className="profile__header">
      <div className="profile__header__image" style={style}></div>
      <div className="profile__header__content">
        <div className="first__row">
          <div className="profile__avatar">
            <Image src={image} fluid roundedCircle></Image>
          </div>
          <div className="profile__operation">
            {userInfo.id === id && <EditProfile avatar={image} name={name} />}
            {userInfo.id !== id && (
              <Button variant="dark" className="profile__follow__button">
                Follow
              </Button>
            )}
          </div>
        </div>
        <div className="info__row">
          <span className="poppins-regular profile__fullname">{name}</span>
          <br />
          <span className="profile__nickname">@{id}</span>
        </div>
        <div className="viewmore__row">
          <a href="">view more</a>
        </div>
        <div className="date__row">
          <Image src={calendarImg} fluid></Image>
          Joined {formatDate()}
        </div>
        <div className="follow__status__row">
          <div className="follow__status__item">
            <a href="" className="follow__status__link">
              <span>{"650"}</span>
              <span className="suffix">Following</span>
            </a>
          </div>
          <div className="follow__status__item">
            <a href="" className="follow__status__link">
              <span>{"188.5M"}</span>
              <span className="suffix">Followers</span>
            </a>
          </div>
          <div className="follow__status__item">
            <a href="" className="follow__status__link">
              <span>{"151"}</span>
              <span className="suffix">Subscriptions</span>
            </a>
          </div>
        </div>
        <div className="known__follower__row">
          <div className="avatar__list">
            <Image src={testAvatar2} roundedCircle></Image>
            <Image src={testAvatar3} roundedCircle></Image>
            <Image src={testAvatar4} roundedCircle></Image>
          </div>
          <div className="known__follower__info">
            Followed by {"多伦多方脸" + ","} {"李老师不是你老师" + ","} and {3}{" "}
            others you follow
          </div>
        </div>
      </div>
    </div>
  );
}
