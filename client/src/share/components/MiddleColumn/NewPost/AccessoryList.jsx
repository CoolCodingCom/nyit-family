// import { ReactComponent as Logo } from "./svg/logo.svg";
import AccessoryItem from "./AccessoryItem";

import "./AccessoryList.css";

const AccessoryList = (props) => {
  return (
    <div className="accessorylist">
      {/* <Logo className="logo" /> */}
      <AccessoryItem handle="media" disabled={props.mediaUpperLimit} onClick={props.onClickMedia}/>
      <AccessoryItem handle="image" disabled={props.mediaUpperLimit}/>
      <AccessoryItem handle="poll" />
      <AccessoryItem handle="emoji" />
      <AccessoryItem handle="schedule" />
    </div>
  );
};

export default AccessoryList;