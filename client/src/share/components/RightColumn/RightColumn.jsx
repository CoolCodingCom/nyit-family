import { useEffect, useRef, useState } from "react";

import EventsBox from "./EventsRec/EventsBox";
import SearchBox from "./Search/SearchBox";
import PeopleBox from "./PeopleRec/PeopleBox";

import "./RightColumn.css";

const RightColumn = (props) => {
  const [isFix, setIsFix] = useState(false);
  const [offset, setOffset] = useState(0);
  const [baseHeight, setBaseHeight] = useState(0);
  const rightRef = useRef(null);

  useEffect(() => {
    console.log(document.body.offsetWidth - window.innerWidth);
    const right = rightRef.current;
    const viewpointHeight = window.innerHeight;
    // const rightHeight = right.getBoundingClientRect().height;
    let lastScrollTop = window.scrollY;
    let movement = 0;
    let bHeight = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const rightHeight = right.offsetHeight;  // must put inside?
      const UPPER_MOV_LIMIT = rightHeight - viewpointHeight;

      movement = movement + scrollTop - lastScrollTop;
      if (movement >= UPPER_MOV_LIMIT) {
        movement = UPPER_MOV_LIMIT;
      } else if (movement <= 0) {
        movement = 0
      }
      // scroll down
      if (scrollTop > lastScrollTop) {
        setBaseHeight(bHeight);
        setOffset(rightHeight - viewpointHeight);
        setIsFix(true);
        if (movement === UPPER_MOV_LIMIT) {
          bHeight = scrollTop + viewpointHeight - rightHeight;
        }
      }
      else {
        // scroll up
        setBaseHeight(bHeight);
        if (movement === 0) {
          bHeight = scrollTop;
          setBaseHeight(0);
          console.log("up to the top");
          setIsFix(false);
        }

      }
      lastScrollTop = scrollTop;
      // setOffset(rightHeight - viewpointHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const style = isFix ? { top: `-${offset}px` } : { top: "0" };
  return (
    <div className="rightcol__wrapper">
      <div
        className="basement"
        style={{ height: `${baseHeight}px` }}
      ></div>
      <div
        className={`rightcol__container ${
          isFix && "rightcol__container-bottomfix"
        }`}
        style={style}
        ref={rightRef}
      >
        <SearchBox />
        <EventsBox />
        <PeopleBox />
      </div>
    </div>
  );
};

export default RightColumn;
