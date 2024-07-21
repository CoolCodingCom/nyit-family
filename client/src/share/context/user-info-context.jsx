import React, { createContext, useContext, useState, useEffect } from "react";
import { getUserById } from "../../apis/user";

const UserInfoContext = createContext();

export const useUserInfo = () => useContext(UserInfoContext);

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const userid = localStorage.getItem("userId");

    getUserById(userid)
      .then((data) => {
        setUserInfo(data.user);
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      });
  }, []);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
