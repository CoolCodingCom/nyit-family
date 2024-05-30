import EventsBox from "./EventsRec/EventsBox";
import SearchBox from "./Search/SearchBox";
import PeopleBox from "./PeopleRec/PeopleBox";

import "./RightColumn.css";


const RightColumn = (props) => {
  return (
    <div className="rightcol__container">
      <SearchBox/>
      <EventsBox/>
      <PeopleBox/>
    </div>
  );
};

export default RightColumn;
