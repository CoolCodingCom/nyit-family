import { NavLink } from "react-router-dom";

import PeopleList from "./PeopleList";
import "./PeopleBox.css";


const PeopleBox = (props) => {
  return (
    <div className="people__container">
      <h3>Who to Follow</h3>
      <PeopleList/>
      <NavLink className="people__showmore">show more</NavLink>
    </div>
  );
};

export default PeopleBox;