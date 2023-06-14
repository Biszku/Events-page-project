import { ImBookmark } from "react-icons/im";

function PopUpElement(props) {
  console.log();
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
        <p>{props.data?.title}</p>
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
        <p>
          <span>Popularity: </span>
        </p>
        <p>
          <span>Score: </span>
        </p>
      </div>
      <div className="Book__section__output-item__popup-panel-place">
        <p>{props.data?.venue.address}</p>
        <p>{props.data?.venue.name}</p>
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
