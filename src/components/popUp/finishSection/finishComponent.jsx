import { ImCheckmark } from "react-icons/im";

const FinishComponent = ({ page, visibility }) => {
  return (
    <div
      style={{
        transform: `translateX(${300 - page * 100}vw)`,
        visibility: `${page === 3 && visibility ? "visible" : "hidden"}`,
        opacity: `${page === 3 ? "1" : "0"}`,
      }}
      className="popup-cart__content-3"
    >
      <ImCheckmark className="popup-cart__content-3-icon" />
      <p className="popup-cart__content-3-text">Thanks for test my app!</p>
    </div>
  );
};

export default FinishComponent;
