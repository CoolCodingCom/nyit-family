import { useEffect, useRef, useState } from "react";
import LeftColumn from "../../share/components/LeftColumn/LeftColumn";
import MiddleColumn from "../../share/components/MiddleColumn/MiddleColumn";
import RightColumn from "../../share/components/RightColumn/RightColumn";

import "./Home.css";

export default function Home() {
  const [isBottomFix, setIsBottomFix] = useState(false);
  const [offset, setOffset] = useState(0);
  const [baseHeight, setBaseHeight] = useState(0);
  const rightRef = useRef(null);

  useEffect(() => {
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
        setIsBottomFix(true);
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
          setIsBottomFix(false);
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

  return (
    <>
      <MiddleColumn />
      <RightColumn
        ref={rightRef}
        isFix={isBottomFix}
        offset={offset}
        baseHeight={baseHeight}
      />
    </>
  );
}
