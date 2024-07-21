import { useNavigate } from "react-router-dom";
import PopList from "../../../Elements/PopList";
import "./AccountList.css";

const AccountList = (props) => {
  const navigate = useNavigate();
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
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        navigate("/login");
      },
    },
  ];

  return (
    <PopList
      istext
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
