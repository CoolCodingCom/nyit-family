
import EventsBox from "./EventsRec/EventsBox";
import SearchBox from "./Search/SearchBox";

import "./RightColumn.css";


const RightColumn = (props) => {
  return (
    <div className="rightcol__container">
      <SearchBox/>
      <EventsBox/>
    </div>
  );
};

export default RightColumn;
