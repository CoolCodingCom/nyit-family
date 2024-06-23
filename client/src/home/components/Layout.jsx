import { Outlet } from "react-router-dom";
import LeftColumn from "../../share/components/LeftColumn/LeftColumn";

import "./Layout.css";

export default function Layout() {
  return (
    <div className="main-container">
        <LeftColumn />
        <Outlet />
    </div>
  );
}
