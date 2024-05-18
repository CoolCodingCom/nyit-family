// import { ReactComponent as Logo } from "./svg/logo.svg";
import AccessoryItem from "./AccessoryItem";

import "./AccessoryList.css";

const AccessoryList = (props) => {
  return (
    <div className="accessorylist">
      {/* <Logo className="logo" /> */}
      <AccessoryItem handle="media" />
      <AccessoryItem handle="image" />
      <AccessoryItem handle="poll" />
      <AccessoryItem handle="emoji" />
      <AccessoryItem handle="schedule" />
    </div>
  );
};

export default AccessoryList;