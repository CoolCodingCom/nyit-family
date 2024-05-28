import { NavLink } from "react-router-dom";
import EmojiIcon from "./svg/emoji.svg";
import ImageIcon from "./svg/image.svg";
import MediasIcon from "./svg/media.svg";
import PollIcon from "./svg/poll.svg";
import ScheduleIcon from "./svg/schedule.svg";

import "./AccessoryItem.css";

const AccessoryItem = (props) => {
  //   const classes = () => {
  //     const classes = ["primary"];
  //     // if (props.handle === props.active) {
  //     //   classes.push('active')
  //     // }
  //     return classes.join(" ");
  //   };

  const icon = () => {
    switch (props.handle) {
      case "media":
        return <img className="icon" src={MediasIcon} alt="MediasIcon" />;
        break;
      case "image":
        return <img className="icon" src={ImageIcon} alt="ImageIcon" />;
        break;
      case "poll":
        return <img className="icon" src={PollIcon} alt="PollIcon" />;
        break;
      case "emoji":
        return <img className="icon" src={EmojiIcon} alt="EmojiIcon" />;
        break;
      case "schedule":
        return <img className="icon" src={ScheduleIcon} alt="ScheduleIcon" />;
        break;
    }
  };

  return <div className="accessoryicon">{icon()}</div>;
};

export default AccessoryItem;
