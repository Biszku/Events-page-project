import { useSelector } from "react-redux";
import EventsContainer from "./eventsContainer";
import SummaryComponent from "./summaryComponent";

const CartComponent = ({ page, visibility, setPage }) => {
  const cartState = useSelector((state) => state.cart.value);

  return (
    <div
      style={{
        transform: `translateX(${100 - page * 100}vw)`,
      }}
      className={`popup-cart__content-1 ${
        page === 1 && visibility ? "pageVisible" : ""
      }`}
    >
      <EventsContainer cartState={cartState} />
      <SummaryComponent cartState={cartState} setPage={setPage} />
    </div>
  );
};

export default CartComponent;
