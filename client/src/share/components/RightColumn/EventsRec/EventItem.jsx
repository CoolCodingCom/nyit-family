import "./EventItem.css";

const EventItem = (props) => {
  console.log(props.image);
  return (
    <div className="eventitem__container">
      <div className="eventitem__context">
        <div className="eventitem__context-head">
          <span>{props.theme}</span>
          {" · "}
          <span>{props.timestamp}</span>
        </div>
        <div className="eventitem__context-content">{props.content}</div>
        <div className="eventitem__context-tag">
          Trending with <span>#{props.tag}</span>
        </div>
      </div>
      <div className="eventitem__image">
        <img src={props.image} />
      </div>
    </div>
  );
};

export default EventItem;
