import React, { createContext, useContext, useState, useEffect } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  useEffect(() => {
    if (isScrollDisabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isScrollDisabled]);

  return (
    <ScrollContext.Provider value={{ isScrollDisabled, setIsScrollDisabled }}>
      {children}
    </ScrollContext.Provider>
  );
};
