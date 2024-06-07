import { NavLink } from "react-router-dom";
import LogoIcon from "./svg/logo.svg";
import HomeIcon from "./svg/home.svg";
import ExploreIcon from "./svg/explore.svg";
import NotificationsIcon from "./svg/notifications.svg";
import MessagesIcon from "./svg/messages.svg";
import BookmarksIcon from "./svg/bookmarks.svg";
import ProfileIcon from "./svg/profile.svg";
import SNPIcon from "./svg/SNP.svg";

import "./NavigationLink.css";

const NavigationLink = (props) => {
  const classes = () => {
    const classes = ["primary"];
    // if (props.handle === props.active) {
    //   classes.push('active')
    // }
    return classes.join(" ");
  };

  const icon = () => {
    switch (props.handle) {
      case "logo":
        return <img className="icon" src={LogoIcon} alt="LogoIcon" />;
        break;
      case "home":
        return <img className="icon" src={HomeIcon} alt="HomeIcon" />;
        break;
      case "explore":
        return <img className="icon" src={ExploreIcon} alt="ExploreIcon" />;
        break;
      case "notifications":
        return (
          <img
            className="icon"
            src={NotificationsIcon}
            alt="NotificationsIcon"
          />
        );
        break;
      case "messages":
        return <img className="icon" src={MessagesIcon} alt="MessagesIcon" />;
        break;
      case "bookmarks":
        return <img className="icon" src={BookmarksIcon} alt="BookmarksIcon" />;
        break;
      case "profile":
        return <img className="icon" src={ProfileIcon} alt="ProfileIcon" />;
        break;
      case "settingandprivacy":
        return <img className="icon" src={SNPIcon} alt="SNPIcon" />;
        break;
    }
  };

  return (
    <div className="navlink">
    <NavLink to={props.url} className={classes()} href="#">
      {icon()}
      {props.name && <span>{props.name}</span>}
    </NavLink>
    </div>
  );
};

export default NavigationLink;
