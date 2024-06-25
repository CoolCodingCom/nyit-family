import PopList from "../../../Elements/PopList";
import "./AccountList.css";

const AccountList = (props) => {
  const accountlist = [
    {
      name: "Add an exsiting account",
      onClickHandler: () => {
        // props.onDeleteShow();
      },
    },
    {
      name: "Log out",
      onClickHandler: () => {
        console.log("button 2");
      },
    },
  ];

  return (
    <PopList
      show={props.show}
      list={accountlist}
      posTop={props.posTop}
      posRight={props.posRight}
      width={260}
      className="morelist__container"
      onClick={props.onClick}
    />
  );
};

export default AccountList;