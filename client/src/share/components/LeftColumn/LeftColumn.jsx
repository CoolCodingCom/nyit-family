import { useState, useEffect } from "react";
import MainNavigationLong from "./Navigation/MainNavigationLong";
import MainNavigationIcon from "./Navigation/MainNavigationIcon";

import "./LeftColumn.css";


const LeftColumn = (props) => {
  const [showLongSideBar, setShowLongSideBar] = useState(true);
  const [showSimSideBar, setShowSimSideBar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1300) {
        setShowLongSideBar(false);
        setShowSimSideBar(true);
      } else {
        setShowLongSideBar(true);
        setShowSimSideBar(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <div className="leftcol__container">
      {showLongSideBar && <MainNavigationLong />}
      {showSimSideBar && <MainNavigationIcon/>}
    </div>
  );
};

export default LeftColumn;
