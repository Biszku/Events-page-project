import { ImArrowLeft2 } from "react-icons/im";

import { useSelector, useDispatch } from "react-redux";
import { setVisibility } from "../../features/visibility/cartVisibility";
import { removeAllProducts } from "../../features/cartController/cart";
import { useState } from "react";
import PageBar from "./pageBar";
import CartComponent from "./cartSection/cartComponent";
import ClosePopUp from "./closePopUp";
import FinishComponent from "./finishSection/finishComponent";
import FormDeliveryComponent from "./formDeliverySection/formDeliveryComponent";

const PopUpCart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.value);
  const visibility = useSelector((state) => state.cartVisibility.value);

  const [page, setPage] = useState(1);

  document.body.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dispatch(setVisibility(false));
      if (page === 3) {
        dispatch(removeAllProducts());
        setPage(1);
      }
    }
  });

  const handleTurnToInvisible = (e) => {
    if (![...e.target.classList].includes("popup-cart")) return;
    dispatch(setVisibility(false));
    if (page === 3) {
      dispatch(removeAllProducts());
      setPage(1);
    }
  };

  return (
    <>
      <div
        className={`popup-cart ${visibility ? "visible" : ""}`}
        onClick={(e) => handleTurnToInvisible(e)}
      >
        <div className={`popup-cart__content ${visibility ? "visible" : ""}`}>
          {cartState.length !== 0 && <PageBar page={page} />}
          <div className="popup-cart__content-container">
            {cartState.length !== 0 && (
              <CartComponent
                page={page}
                visibility={visibility}
                setPage={setPage}
              />
            )}

            {cartState.length !== 0 && (
              <FormDeliveryComponent
                page={page}
                visibility={visibility}
                setPage={setPage}
              />
            )}

            {cartState.length !== 0 && (
              <FinishComponent page={page} visibility={visibility} />
            )}

            {cartState.length === 0 && (
              <span className="popup-cart__content-none">
                There Is Nothing In The Cart
              </span>
            )}
          </div>

          <ClosePopUp
            close={() => {
              dispatch(setVisibility(false));
              if (page === 3) {
                dispatch(removeAllProducts());
                setPage(1);
              }
            }}
          />

          <ImArrowLeft2
            style={{
              display: `${page !== 2 ? "none" : "block"}`,
            }}
            onClick={() => setPage((prev) => prev - 1)}
            className="popup-cart__content_prevPage"
          />
        </div>
      </div>
    </>
  );
};

export default PopUpCart;
