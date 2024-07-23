import PopList from "../../Elements/PopList";

import "./MoreList.css";
import { useUserInfo } from "../../../context/user-info-context";

const MoreList = (props) => {
  const { userInfo } = useUserInfo();
  let morelist = [
    {
      name: "button 1",
      onClickHandler: () => {
        console.log("button 1");
      },
    },
    {
      name: "button 2",
      onClickHandler: () => {
        console.log("button 2");
      },
    },
  ];
  if (userInfo.id === props.userId) {
    morelist.push({
      name: "Delete",
      onClickHandler: () => {
        props.onDeleteShow();
      },
    });
  }

  return (
    <PopList
      istext
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
