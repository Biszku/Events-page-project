import { ImTruck } from "react-icons/im";
import { useForm } from "react-hook-form";

const FormDeliveryComponent = ({ page, visibility, setPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div
      style={{
        transform: `translateX(${200 - page * 100}vw)`,
      }}
      className={`popup-cart__content-2 ${
        page === 2 && visibility ? "pageVisible" : ""
      }`}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPage((prev) => prev + 1);
        }}
      >
        <div className="popup-cart__content-2_form">
          <div className="popup-cart__content-2_form-item">
            <p>First Name </p>
            <input
              className="popup-cart__content-2_form-item-input"
              placeholder="John/Jane"
              type="text"
              {...register("firstName", { required: true })}
            />
            <p>Last Name </p>
            <input
              className="popup-cart__content-2_form-item-input"
              placeholder="Doe"
              type="text"
              {...register("lastName", { required: true })}
            />
          </div>
          <div className="popup-cart__content-2_form-item">
            <p>Email </p>
            <input
              className="popup-cart__content-2_form-item-input"
              placeholder="anonymou@gmail.com"
              type="email"
              {...register("emailAddress", { required: true })}
            />
            <p>Phone Number </p>
            <input
              className="popup-cart__content-2_form-item-input"
              placeholder="+12 345 678 912"
              type="tel"
              {...register("phoneNumber", { required: true })}
            />
          </div>
          <div className="popup-cart__content-2_form-item">
            <p>Address</p>
            <textarea
              placeholder="Enter address"
              className="popup-cart__content-2_form-item-input popup-cart__content-2_form-textarea"
              rows="2"
              cols="50"
              {...register("deliveryAddress", { required: true })}
            />
            <p>Postal code </p>
            <input
              className="popup-cart__content-2_form-item-input"
              placeholder="Enter postal code"
              type="text"
              {...register("postalCode", { required: true })}
            />
          </div>
        </div>
        <div className="popup-cart__content-2_delivery">
          <p className="popup-cart__content-2_delivery-header">Delivery Type</p>
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
        </div>
        <input
          type="submit"
          value="Finish Transaction"
          className="popup-cart__content-2-btn"
        />
      </form>
    </div>
  );
};

export default FormDeliveryComponent;
