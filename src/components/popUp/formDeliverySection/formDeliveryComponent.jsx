import { ImTruck } from "react-icons/im";

const FormDeliveryComponent = ({ page, visibility, setPage }) => {
  return (
    <div
      style={{
        transform: `translateX(${200 - page * 100}vw)`,
      }}
      className={`popup-cart__content-2 ${
        page === 2 && visibility ? "pageVisible" : ""
      }`}
    >
      <div className="popup-cart__content-2_form">
        <div className="popup-cart__content-2_form-item">
          <p>First Name </p>
          <input
            className="popup-cart__content-2_form-item-input"
            placeholder="John/Jane"
            type="text"
          />
          <p>Last Name </p>
          <input
            className="popup-cart__content-2_form-item-input"
            placeholder="Doe"
            type="text"
          />
        </div>
        <div className="popup-cart__content-2_form-item">
          <p>Email </p>
          <input
            className="popup-cart__content-2_form-item-input"
            placeholder="anonymou@gmail.com"
            type="email"
          />
          <p>Phone Number </p>
          <input
            className="popup-cart__content-2_form-item-input"
            placeholder="+12 345 678 912"
            type="tel"
          />
        </div>
        <div className="popup-cart__content-2_form-item">
          <p>Address </p>
          <textarea
            placeholder="Enter address"
            className="popup-cart__content-2_form-item-input popup-cart__content-2_form-textarea"
            rows="2"
            cols="50"
          />
          <p>Postal code </p>
          <input
            className="popup-cart__content-2_form-item-input"
            placeholder="Enter postal code"
            type="text"
          />
        </div>
      </div>
      <div className="popup-cart__content-2_delivery">
        <p className="popup-cart__content-2_delivery-header">Delivery Type</p>
        <form className="popup-cart__content-2_delivery_form">
          <div className="popup-cart__content-2_delivery_form-item">
            <input
              style={{
                display: "none",
              }}
              className="popup-cart__content-2_form-item-input popup-cart__content-2_delivery_form-item-radio"
              type="radio"
              name="delivery"
              id="Radio1"
            />
            <label htmlFor="Radio1">
              <div
                className="popup-cart__content-2_delivery_form-item-radio-style"
                value="Courier Delivery (online payment)"
              ></div>
            </label>
            <ImTruck className="popup-cart__content-2_delivery_form-item-icon" />
            <span className="popup-cart__content-2_delivery_form-item-text">
              {`Courier Delivery (online payment)`}
            </span>
          </div>
          <div className="popup-cart__content-2_delivery_form-item">
            <input
              style={{
                display: "none",
              }}
              className="popup-cart__content-2_form-item-input popup-cart__content-2_delivery_form-item-radio"
              type="radio"
              name="delivery"
              id="Radio2"
            />
            <label htmlFor="Radio2">
              <div
                className="popup-cart__content-2_delivery_form-item-radio-style"
                value="Courier Delivery (cash on delivery)"
              ></div>
            </label>
            <ImTruck className="popup-cart__content-2_delivery_form-item-icon" />
            <span className="popup-cart__content-2_delivery_form-item-text">
              {`Courier Delivery (cash on delivery)`}
            </span>
          </div>
        </form>
      </div>
      <button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
        className="popup-cart__content-2-btn"
      >
        Finish Transaction
      </button>
    </div>
  );
};

export default FormDeliveryComponent;
