import { NavLink } from "react-router-dom";
import "./PeopleItem.css";

const PeopleItem = (props) => {
  return (
    <NavLink className="peopleitem__container" to={props.path}>
      <div className="peopleitem__avadar">
        <img src={props.image} />
      </div>
      <div className="peopleitem__profile">
        <div className="peopleitem__profile-name">
          {props.username}
        </div>
        <div className="peopleitem__profile-id">{props.userid}</div>
      </div>
      <div className="peopleitem__follow">
        <button>Follow</button>
      </div>
    </NavLink>
  );
};

export default PeopleItem;
