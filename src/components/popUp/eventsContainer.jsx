import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  changeAmount,
  removeFromCart,
} from "../../features/cartController/cart";
import InputComponent from "./InputComponent";

const EventsContainer = ({ cartState }) => {
  const dispatch = useDispatch();

  const IncreaseQuantity = (quantity, id, element) => {
    if (isNaN(quantity)) {
      dispatch(changeAmount({ id, amount: 1, type: "set" }));
      element.current.value = 1;
      return;
    }
    dispatch(changeAmount({ id, amount: +quantity, type: "set" }));
  };

  const IncreaseQuantityByOne = (id, element) => {
    dispatch(changeAmount({ id, amount: 1 }));
    element.current.value = +element.current.value + 1;
  };

  const DecreaseQuantityByOne = (id, element) => {
    dispatch(changeAmount({ id, amount: -1 }));
    element.current.value = +element.current.value - 1;
  };
  return (
    <div className="popup-cart__content-1_events-container">
      <span className="popup-cart__content-1_events-container-upbar">
        product
      </span>
      <span className="popup-cart__content-1_events-container-upbar">
        price
      </span>
      <span className="popup-cart__content-1_events-container-upbar">
        quantity
      </span>
      <span className="popup-cart__content-1_events-container-upbar">
        subtotal
      </span>
      <div className="popup-cart__content-1_events-container-space"></div>
      <div className="popup-cart__content-1_events-container-events">
        {cartState.map((obj, index) => (
          <div
            key={obj?.id}
            className="popup-cart__content-1_events-container-events-item"
          >
            <div className="popup-cart__content-1_events-container-events-item-product">
              <div
                style={{
                  background: `URL(${obj?.performers[0]?.image})  no-repeat fixed center`,
                }}
                className="popup-cart__content-1_events-container-events-item-product-img"
              ></div>
              <span className="popup-cart__content-1_events-container-events-item-product-title">
                {obj?.short_title}
              </span>
            </div>
            <p>{obj.stats?.lowest_price}$</p>
            <div className="popup-cart__content-1_events-container-events-item-quantity">
              <InputComponent
                amount={obj.amount}
                id={obj.id}
                index={index}
                IncreaseQuantity={IncreaseQuantity}
                IncreaseQuantityByOne={IncreaseQuantityByOne}
                DecreaseQuantityByOne={DecreaseQuantityByOne}
              />
            </div>
            <p>{obj?.amount * obj?.stats.lowest_price}$</p>
            <ImBin
              className="popup-cart__content-1_events-container-events-item-thrashIcon"
              onClick={() => dispatch(removeFromCart(obj.id))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsContainer;
