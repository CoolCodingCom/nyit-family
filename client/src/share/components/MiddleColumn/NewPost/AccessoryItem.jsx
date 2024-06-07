import { NavLink } from "react-router-dom";
import EmojiIcon from "./svg/emoji.svg";
import ImageIcon from "./svg/image.svg";
import MediasIcon from "./svg/media.svg";
import PollIcon from "./svg/poll.svg";
import ScheduleIcon from "./svg/schedule.svg";
import Cbutton from "../../Elements/Cbutton";

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
        return <Cbutton image={MediasIcon} alt="Media" onClick={props.onClick}/>;
        break;
      case "image":
        return <Cbutton image={ImageIcon} alt="GIF" />;
        break;
      case "poll":
        return <Cbutton image={PollIcon} alt="Poll" />;
        break;
      case "emoji":
        return <Cbutton image={EmojiIcon} alt="Emoji" />;
        break;
      case "schedule":
        return <Cbutton image={ScheduleIcon} alt="Schedule" />;
        break;
    }
  };

  return <div className="accessoryicon">{icon()}</div>;
};

export default AccessoryItem;
