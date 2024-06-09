import PopList from "../../Elements/PopList";

import "./MoreList.css";

const MoreList = (props) => {
  const morelist = [
		{
			name: "button 1",
			onClickHandler: () => {
				console.log("button 1");
			}
		},
		{
			name: "button 2",
			onClickHandler: () => {
				console.log("button 2");
			}
		},
		{
			name: "button 3",
			onClickHandler: () => {
				console.log("button 3");
			}
		}
	];

  return (
    <PopList show={props.show} list={morelist} className="morelist__container" onClick={props.onClick}/>
  );
};

export default MoreList;
