import { ImBookmark, ImCross } from "react-icons/im";

function PopUpElement(props) {
  console.log(props.data.data);
  return (
    <div
      className="Book__section__output-item__popup"
      style={{
        visibility: props.visible ? "visible" : "hidden",
        opacity: props.visible ? "1" : "0",
        transform: props.visible ? "translateY(0vh)" : "translateY(-100vh)",
      }}
    >
      <div
        className="Book__section__output-item__popup-img"
        style={{
          backgroundImage: `url(${props.data.data.performers[0].image})`,
        }}
      ></div>
      <div className="Book__section__output-item__popup-panel">
        <ImBookmark className="Book__section__output-item__popup-panel-bookicon" />
        <div
          onClick={() => {
            props.close();
            props.enableButton();
          }}
          className="Book__section__output-item__popup-panel-closeicon"
        >
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="Book__section__output-item__popup-info-title">
        <p>{props.data.data.title}</p>
        <span>Title of the event</span>
      </div>
      <div className="Book__section__output-item__popup-info-general">
        <p>{props.data.data.datetime_local.split("T").join(" ")}</p>
        <p>{props.data.data.datetime_utc.split("T").join(" ")}</p>
        <p>
          {props.data.data.stats.lowest_price
            ? props.data.data.stats.lowest_price + "$"
            : "-"}
        </p>
        <p>
          {props.data.data.stats.average_price
            ? props.data.data.stats.average_price + "$"
            : "-"}
        </p>
        <p>
          {props.data.data.stats.highest_price
            ? props.data.data.stats.highest_price + "$"
            : "-"}
        </p>
        <p>
          <span>Popularity: </span>
        </p>
        <p>
          <span>Score: </span>
        </p>
      </div>
      <div className="Book__section__output-item__popup-panel-place">
        <p>{props.data.data.venue.address}</p>
        <p>{props.data.data.venue.name}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default PopUpElement;
