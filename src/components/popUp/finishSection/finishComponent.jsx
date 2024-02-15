import { ImCheckmark } from "react-icons/im";

const FinishComponent = ({ page, visibility }) => {
  return (
    <div
      style={{
        transform: `translateX(${300 - page * 100}vw)`,
      }}
      className={`popup-cart__content-3 ${
        page === 3 && visibility ? "pageVisible" : ""
      }`}
    >
      <ImCheckmark className="popup-cart__content-3-icon" />
      <p className="popup-cart__content-3-text">Thanks for test my app!</p>
    </div>
  );
};

export default FinishComponent;
