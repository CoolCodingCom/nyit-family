import Event1Img from "./svg/event1.svg";
import Event2Img from "./svg/event2.svg";
import Event3Img from "./svg/event3.svg";

import EventItem from "./EventItem";

import "./EventsList.css";

const DUMMY_EVENTS = [
  {
    id: "1",
    theme: "COVID19",
    timestamp: "last night",
    content:
      "England's Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
    tag: "covid19",
    NumOfPosts: "100k",
    image: Event1Img,
  },
  {
    id: "2",
    theme: "US news",
    timestamp: "4h ago",
    content:
      "Parler may go offline following suspensions by Amazon, Apple and Google",
    tag: "trump",
    NumOfPosts: "100k",
    image: Event2Img,
  },
  {
    id: "3",
    theme: "India",
    timestamp: "1h ago",
    content:
      "India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test",
    tag: "sport",
    NumOfPosts: "10k",
    image: Event3Img,
  },
];

const EventsList = (props) => {
  return (
    <div className="">
      {DUMMY_EVENTS.map((eitem) => (
        <EventItem
          key={eitem.id}
          theme={eitem.theme}
          content={eitem.content}
          timestamp={eitem.timestamp}
          tag={eitem.tag}
          NumOfPosts={eitem.NumOfPosts}
          image={eitem.image}
        />
      ))}
    </div>
  );
};

export default EventsList;
