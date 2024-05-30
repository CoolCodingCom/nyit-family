import People1Img from "./svg/people1.svg";
import People2Img from "./svg/people2.svg";
import People3Img from "./svg/people3.svg";

import PeopleItem from "./PeopleItem";

import "./PeopleList.css";

const DUMMY_USERS = [
  {
    id: "1",
    username: "Bessie Cooper",
    userid: "@alessandroveronezi",
    image: People1Img,
  },
  {
    id: "2",
    username: "Jenny Wilson",
    userid: "@gabrielcantarin",
    image: People2Img,
  },
  {
    id: "3",
    username: "Amy",
    userid: "@Amy45678",
    image: People3Img,
  },
];

const PeopleList = (props) => {
  return (
    <div className="">
      {DUMMY_USERS.map((person) => (
        <PeopleItem
          key={person.id}
          username={person.username}
          userid={person.userid}
          image={person.image}
          path="/signup"
        />
      ))}
    </div>
  );
};

export default PeopleList;


