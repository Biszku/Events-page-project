import { useSelector } from "react-redux";

const SummaryComponent = ({ cartState, setPage }) => {
  const cartGlobalState = useSelector((state) => state.cart.value);

  return (
    <div className="popup-cart__content-1_summary-container">
      <p className="popup-cart__content-1_summary-container-summaryHeader">
        Summary
      </p>
      <div className="popup-cart__content-1_summary-container-summaryColumn">
        <p className="popup-cart__content-1_summary-container-summaryColumn-summaryParagraphs">
          Total Price:
        </p>
        <span className="popup-cart__content-1_summary-container-summaryColumn-summaryPrice">
          {`${cartState.reduce(
            (sum, cur) => sum + cur?.stats.lowest_price * cur?.amount,
            0
          )}$`}
        </span>
      </div>
      <div className="popup-cart__content-1_summary-container-summaryColumn">
        <p className="popup-cart__content-1_summary-container-summaryColumn-summaryParagraphs">
          Saved money:
        </p>
        <span className="popup-cart__content-1_summary-container-summaryColumn-summaryPrice-saved">
          {`${
            cartState.reduce(
              (sum, cur) => sum + cur?.stats.median_price * cur?.amount,
              0
            ) -
            cartState.reduce(
              (sum, cur) => sum + cur?.stats.lowest_price * cur?.amount,
              0
            )
          }$`}
        </span>
      </div>
      <button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
        disabled={cartGlobalState.some((obj) => obj.amount <= 0)}
        className="popup-cart__content-1_summary-container-summaryButton"
      >
        proceed to checkout
      </button>
    </div>
  );
};

export default SummaryComponent;
