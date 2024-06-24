import PopList from "../../Elements/PopList";

import "./MoreList.css";

const MoreList = (props) => {
  const morelist = [
    {
      name: "Delete",
      onClickHandler: () => {
        props.onDeleteShow();
      },
    },
    {
      name: "button 2",
      onClickHandler: () => {
        console.log("button 2");
      },
    },
    {
      name: "button 3",
      onClickHandler: () => {
        console.log("button 3");
      },
    },
  ];

  return (
    <PopList
      show={props.show}
      posTop={-15}
      posRight={5}
      list={morelist}
      className="morelist__container"
      onClick={props.onClick}
    />
  );
};

export default MoreList;
