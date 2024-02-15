import { ImBookmark, ImStarFull } from "react-icons/im";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartController/cart";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import isEventInCart from "../../features/cartController/isProductInCart";

function PopUpElement(props) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.value);

  const lat = props.data?.venue.location.lat || 37;
  const lon = props.data?.venue.location.lon || -95;

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [38, 38],
  });

  const isBookmarked = () => {
    const searchEvent = props.bookmarkEvents.find(
      (event) => event?.id === props.data?.id
    );
    if (searchEvent) return true;
    return false;
  };

  return (
    <div
      className={`Book__section__output-item__popup ${
        props.visible ? "active-popUp" : ""
      }`}
    >
      <div
        className="Book__section__output-item__popup-img"
        style={{
          backgroundImage: `url(${props.data?.performers[0].image})`,
        }}
      ></div>
      <div className="Book__section__output-item__popup-panel">
        <ImBookmark
          className={`Book__section__output-item__popup-panel-bookicon ${
            !isBookmarked() ? "" : "bookmarked"
          }`}
          onClick={() => {
            !isBookmarked()
              ? props.addBookmark(props.data)
              : props.filterBookmark(props.data);
          }}
        />
        <div
          onClick={() => {
            props.close();
            props.enableButton();
            props.setCurrentEvent(null);
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
          onClick={() => dispatch(addToCart(props.data))}
          disabled={isEventInCart(cartState, props.data)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default PopUpElement;
