import { forwardRef } from "react";

import EventsBox from "./EventsRec/EventsBox";
import SearchBox from "./Search/SearchBox";
import PeopleBox from "./PeopleRec/PeopleBox";

import "./RightColumn.css";

const RightColumn = forwardRef((props, ref) => {
  const style = props.isFix ? { top: `-${props.offset}px` } : { top: "0" };
  return (
    <div className="rightcol__wrapper">
      <div
        className="basement"
        style={{ height: `${props.baseHeight}px` }}
      ></div>
      <div
        className={`rightcol__container ${
          props.isFix && "rightcol__container-bottomfix"
        }`}
        style={style}
        ref={ref}
      >
        <SearchBox />
        <EventsBox />
        <PeopleBox />
      </div>
    </div>
  );
});

export default RightColumn;
