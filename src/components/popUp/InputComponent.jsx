import { ImCircleLeft, ImCircleRight } from "react-icons/im";
import { useRef } from "react";

const InputComponent = ({
  amount,
  id,
  index,
  IncreaseQuantity,
  IncreaseQuantityByOne,
  DecreaseQuantityByOne,
}) => {
  const inputRef = useRef(null);

  return (
    <>
      <ImCircleLeft
        onClick={(e) => {
          DecreaseQuantityByOne(id, inputRef);
        }}
        className="popup-cart__content-1_events-container-events-item-quantity-icon"
      />
      <input
        className={`popup-cart__content-1_events-container-events-item-quantity-input inputNumber-${index}`}
        type="text"
        ref={inputRef}
        defaultValue={amount}
        onChange={(e) => {
          IncreaseQuantity(e.target.value, id, inputRef);
        }}
      />
      <ImCircleRight
        onClick={(e) => {
          IncreaseQuantityByOne(id, inputRef);
        }}
        className="popup-cart__content-1_events-container-events-item-quantity-icon"
      />
      <span
        className={`popup-cart__content-1_events-container-events-item-quantity-error ${
          amount <= 0 ? "visible" : ""
        }`}
      >
        Error
      </span>
    </>
  );
};

export default InputComponent;
