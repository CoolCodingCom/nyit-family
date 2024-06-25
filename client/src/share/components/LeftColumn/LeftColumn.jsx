import { useState, useEffect } from "react";

import { getUserById } from "../../../apis/user";
import MainNavigationLong from "./Navigation/MainNavigationLong";
import MainNavigationIcon from "./Navigation/MainNavigationIcon";

import "./LeftColumn.css";



const LeftColumn = (props) => {
  const [showLongSideBar, setShowLongSideBar] = useState(true);
  const [showSimSideBar, setShowSimSideBar] = useState(false);
	const [curUser, setCurUser] = useState();

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


	useEffect(() => {
    const userid = localStorage.getItem('userId');

    getUserById(userid)
    .then((data) => {
      setCurUser(data.user);
    })
    .catch((error) => {
      console.error("Error fetching user information:", error);
    });
	}, [])

  return (


    <div className="leftcol__container">
      {showLongSideBar && curUser && <MainNavigationLong username={curUser.name} userid={curUser.id}/>}
      {showSimSideBar && <MainNavigationIcon/>}
    </div>
  );
};

export default LeftColumn;
