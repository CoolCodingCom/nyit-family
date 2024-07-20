import { useState, useEffect } from "react";

import MainNavigationLong from "./Navigation/MainNavigationLong";
import MainNavigationIcon from "./Navigation/MainNavigationIcon";
import { useUserInfo } from "../../context/user-info-context";
import "./LeftColumn.css";

const LeftColumn = (props) => {
  const [showLongSideBar, setShowLongSideBar] = useState(true);
  const [showSimSideBar, setShowSimSideBar] = useState(false);
  const { userInfo } = useUserInfo();

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
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="leftcol__container">
      {showLongSideBar && userInfo && (
        <MainNavigationLong username={userInfo.name} userid={userInfo.id} />
      )}
      {showSimSideBar && (
        <MainNavigationIcon username={userInfo.name} userid={userInfo.id} />
      )}
    </div>
  );
};

export default LeftColumn;
