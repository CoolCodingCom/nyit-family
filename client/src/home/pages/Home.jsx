import LeftColumn from "../../share/components/LeftColumn/LeftColumn";
import MiddleColumn from "../../share/components/MiddleColumn/MiddleColumn";
import RightColumn from "../../share/components/RightColumn/RightColumn";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </div>
  );
}
