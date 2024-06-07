import MainNavigation from "./Navigation/MainNavigation";

import "./LeftColumn.css";

const LeftColumn = (props) => {
  return (
    <div className="leftcol__container">
      <MainNavigation />
    </div>
  );
};

export default LeftColumn;
