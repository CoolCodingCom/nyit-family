import { useEffect } from "react";
import LeftColumn from "../../share/components/LeftColumn/LeftColumn";
import MiddleColumn from "../../share/components/MiddleColumn/MiddleColumn";
import RightColumn from "../../share/components/RightColumn/RightColumn";

import "./Home.css";


export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      console.log('User scrolled:', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <>
      <MiddleColumn />
      <RightColumn />
    </>
  );
}
