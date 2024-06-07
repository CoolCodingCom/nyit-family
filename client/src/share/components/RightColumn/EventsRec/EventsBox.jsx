import { NavLink } from "react-router-dom";
import EventsList from "./EventsList";
import "./EventsBox.css";

const EventsBox = (props) => {
  return (
    <div className="events__container">
      <h3>What's happening</h3>
      <EventsList />
      <NavLink className="events__showmore">show more</NavLink>
    </div>
  );
};

export default EventsBox;
