import { ImBookmark, ImStarFull } from "react-icons/im";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

function PopUpElement(props) {
  const lat = props.data?.venue.location.lat || 37;
  const lon = props.data?.venue.location.lon || -95;

  const historyData = !JSON.parse(localStorage.getItem("historyData"))
    ? []
    : JSON.parse(localStorage.getItem("historyData"));

  const newHistoryData = historyData.find((el) => el?.id === props.data?.id)
    ? historyData.filter((el) => el.id !== props.data?.id)
    : [props?.data, ...historyData];

  const historyCart =
    localStorage.getItem("cart") === null
      ? []
      : JSON.parse(localStorage.getItem("cart"));
  const newHistoryCart = [{ ...props.data, amount: 1 }, ...historyCart];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [38, 38],
  });

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
          backgroundImage: `url(${props.data?.performers[0].image})`,
        }}
      ></div>
      <div className="Book__section__output-item__popup-panel">
        <ImBookmark
          onClick={() => {
            localStorage.setItem("historyData", JSON.stringify(newHistoryData));

            props.memory.find((el) => el.id === props.data?.id)
              ? props.SetMemory((prevState) =>
                  prevState.filter((el) => el.id !== props.data?.id)
                )
              : props.SetMemory((prevState) => [props?.data, ...prevState]);
          }}
          className="Book__section__output-item__popup-panel-bookicon"
          style={{
            color: `${
              props.memory.find((el) => el.id === props.data?.id)
                ? "red"
                : "black"
            }`,
          }}
        />
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
        <p>{props.data?.short_title}</p>
        <span>Title of the event</span>
      </div>
      <div className="Book__section__output-item__popup-info-general">
        <p>{props.data?.datetime_local.split("T").join(" ")}</p>
        <p>{props.data?.datetime_utc.split("T").join(" ")}</p>
        <p>
          {props.data?.stats.lowest_price
            ? props.data?.stats.lowest_price + "$"
            : "-"}
        </p>
        <p>
          {props.data?.stats.average_price
            ? props.data?.stats.average_price + "$"
            : "-"}
        </p>
        <p>
          {props.data?.stats.highest_price
            ? props.data?.stats.highest_price + "$"
            : "-"}
        </p>
        <div className="Book__section__output-item__popup-info-general-popularity">
          <span>Popularity: </span>
          <div
            className="popularity_container popularity_container-popup"
            style={{
              background: `linear-gradient(to right, #5d5dd5 0%, #5d5dd5 ${
                props.data?.popularity * 100
              }%, rgba(255, 255, 255, 0.6) ${props.data?.popularity * 100}%)`,
            }}
          ></div>
        </div>
        <div className="Book__section__output-item__popup-info-general-score">
          <span>Score: </span>
          <div>
            <ImStarFull className="Book__section__output-item__popup-info-general-score-icon" />
            <ImStarFull className="Book__section__output-item__popup-info-general-score-icon" />
            <ImStarFull className="Book__section__output-item__popup-info-general-score-icon" />
            <ImStarFull className="Book__section__output-item__popup-info-general-score-icon" />
            <ImStarFull className="Book__section__output-item__popup-info-general-score-icon" />
          </div>
        </div>
      </div>
      <div className="Book__section__output-item__popup-panel-place">
        <p>{`${props.data?.venue.city}, ${props.data?.venue.address}`}</p>
        <p>{props.data?.venue.name}</p>

        <MapContainer key={props.data?.id} center={[lat, lon]} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lon]} icon={customIcon}></Marker>
        </MapContainer>

        <button
          onClick={props.addToCart.bind(null, props.data, newHistoryCart)}
          disabled={
            props.data?.stats.lowest_price === null ||
            props.cart.find((event) => event.id === props.data?.id)?.id ===
              props.data?.id
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default PopUpElement;
