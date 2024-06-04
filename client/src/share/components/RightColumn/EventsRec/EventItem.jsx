import { NavLink } from "react-router-dom";
import "./EventItem.css";

const EventItem = (props) => {
  return (
    <NavLink className="eventitem__container" to={props.path}>
      <div className="eventitem__context">
        <div className="eventitem__context-head">
          <span>{props.theme}</span>
          {" · "}
          <span>{props.timestamp}</span>
        </div>
        <div className="eventitem__context-content">{props.content}</div>
        <div className="eventitem__context-tag">
          Trending with <span>#{props.tag}</span>
        </div>
      </div>
      <div className="eventitem__image">
        <img src={props.image} />
      </div>
    </NavLink>
  );
};

export default EventItem;
