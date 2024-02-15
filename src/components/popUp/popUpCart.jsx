import {
  ImBin,
  ImCircleLeft,
  ImCircleRight,
  ImTruck,
  ImArrowLeft2,
  ImCheckmark,
} from "react-icons/im";

import { useSelector, useDispatch } from "react-redux";
import { setVisibility } from "../../features/visibility/cartVisibility";
import { useState } from "react";

const PopUpCart = () => {
  const visibility = useSelector((state) => state.cartVisibility.value);
  const cartState = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const [transaction, setTransaction] = useState({
    page: 1,
    firstname: { value: "", valid: false },
    lastname: { value: "", valid: false },
    email: { value: "", valid: false },
    phoneNumber: { value: "", valid: false },
    address: { value: "", valid: false },
    postalCode: { value: "", valid: false },
    deliveryType: { value: "", valid: false },
  });

  const IncreaseQuantity = (quantity, eventID, HTMLElement) => {
    console.log("increase");
  };

  const IncreaseQuantityByOne = (eventID, ElementIndex) => {
    console.log("increase by one");
  };

  const DecreaseQuantityByOne = (eventID, ElementIndex) => {
    console.log("decrease by one");
  };

  document.body.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dispatch(setVisibility(false));
      if (transaction.page === 3) {
        localStorage.clear("cart");
        setTransaction({
          page: 1,
          firstname: { value: "", valid: false },
          lastname: { value: "", valid: false },
          email: { value: "", valid: false },
          phoneNumber: { value: "", valid: false },
          address: { value: "", valid: false },
          postalCode: { value: "", valid: false },
          deliveryType: { value: "", valid: false },
        });
      }
    }
  });

  return (
    <>
      <div
        className={`popup-cart${visibility ? " visible" : ""}`}
        onClick={(e) => {
          if (![...e.target.classList].includes("popup-cart")) return;
          dispatch(setVisibility(false));
          if (transaction.page === 3) {
            localStorage.clear("cart");
            setTransaction({
              page: 1,
              firstname: { value: "", valid: false },
              lastname: { value: "", valid: false },
              email: { value: "", valid: false },
              phoneNumber: { value: "", valid: false },
              address: { value: "", valid: false },
              postalCode: { value: "", valid: false },
              deliveryType: { value: "", valid: false },
            });
          }
        }}
      >
        {/* <div className="popup-background-filter"></div> */}
        <div className={`popup-cart__content${visibility ? " visible" : ""}`}>
          {cartState.length !== 0 && (
            <div className="popup-cart__content-page-container">
              <div className="popup-cart__content-page-container_block">
                <span
                  className="popup-cart__content-page-container_block-number"
                  style={{
                    color:
                      transaction?.page === 1 ? "#5d5dd5" : "rgb(246 246 246)",
                  }}
                >
                  1
                </span>
              </div>
              <div className="popup-cart__content-page-container_pause"></div>
              <div className="popup-cart__content-page-container_block">
                <span
                  className="popup-cart__content-page-container_block-number"
                  style={{
                    color:
                      transaction?.page === 2 ? "#5d5dd5" : "rgb(246 246 246)",
                  }}
                >
                  2
                </span>
              </div>
              <div className="popup-cart__content-page-container_pause"></div>
              <div className="popup-cart__content-page-container_block">
                <span
                  className="popup-cart__content-page-container_block-number"
                  style={{
                    color:
                      transaction?.page === 3 ? "#5d5dd5" : "rgb(246 246 246)",
                  }}
                >
                  3
                </span>
              </div>
            </div>
          )}
          {cartState.length !== 0 && (
            <div
              style={{
                transform: `translateX(${100 - transaction.page * 100}vw)`,
                visibility: `${
                  transaction.page === 1 && visibility ? "visible" : "hidden"
                }`,
                opacity: `${transaction.page === 1 ? "1" : "0"}`,
              }}
              className="popup-cart__content-1"
            >
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
                            background: `URL(${obj?.performers[0].image})  no-repeat fixed center`,
                          }}
                          className="popup-cart__content-1_events-container-events-item-product-img"
                        ></div>
                        <span className="popup-cart__content-1_events-container-events-item-product-title">
                          {obj?.short_title}
                        </span>
                      </div>
                      <p>{obj?.stats.lowest_price}$</p>
                      <div className="popup-cart__content-1_events-container-events-item-quantity">
                        <ImCircleLeft
                          style={{ userSelect: "none" }}
                          onClick={(e) => {
                            DecreaseQuantityByOne(obj.id, index);
                          }}
                          className="popup-cart__content-1_events-container-events-item-quantity-icon"
                        />
                        <input
                          className={`popup-cart__content-1_events-container-events-item-quantity-input inputNumber-${index}`}
                          type="text"
                          defaultValue={obj?.amount}
                          onChange={(e) => {
                            IncreaseQuantity(e.target.value, obj.id, e.target);
                          }}
                        />
                        <ImCircleRight
                          style={{ userSelect: "none" }}
                          onClick={(e) => {
                            IncreaseQuantityByOne(obj.id, index);
                          }}
                          className="popup-cart__content-1_events-container-events-item-quantity-icon"
                        />
                        <span
                          style={{
                            transform:
                              obj.amount === 0
                                ? `translateY(0%)`
                                : `translateY(-150%)`,
                            opacity: obj.amount === 0 ? `1` : `0`,
                            visibility: obj.amount === 0 ? `visible` : `hidden`,
                          }}
                          className="popup-cart__content-1_events-container-events-item-quantity-error"
                        >
                          empty
                        </span>
                      </div>
                      <p>{obj?.amount * obj?.stats.lowest_price}$</p>
                      <ImBin className="popup-cart__content-1_events-container-events-item-thrashIcon" />
                    </div>
                  ))}
                </div>
              </div>
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
                        (sum, cur) =>
                          sum + cur?.stats.median_price * cur?.amount,
                        0
                      ) -
                      cartState.reduce(
                        (sum, cur) =>
                          sum + cur?.stats.lowest_price * cur?.amount,
                        0
                      )
                    }$`}
                  </span>
                </div>
                <button
                  onClick={() =>
                    setTransaction((prevState) => {
                      return {
                        ...prevState,
                        page: prevState?.page + 1,
                        totalPrice: cartState.reduce(
                          (sum, cur) =>
                            sum + cur?.stats.lowest_price * cur?.amount,
                          0
                        ),
                      };
                    })
                  }
                  disabled={
                    cartState.reduce((sum, event) => {
                      if (event.amount !== 0) return sum + 1;
                      return sum;
                    }, 0) < cartState.length
                  }
                  className="popup-cart__content-1_summary-container-summaryButton"
                >
                  proceed to checkout
                </button>
              </div>
            </div>
          )}

          {cartState.length !== 0 && (
            <div
              style={{
                transform: `translateX(${200 - transaction.page * 100}vw)`,
                visibility: `${
                  transaction.page === 2 && visibility ? "visible" : "hidden"
                }`,
                opacity: `${transaction.page === 2 ? "1" : "0"}`,
              }}
              className="popup-cart__content-2"
            >
              <div className="popup-cart__content-2_form">
                <div className="popup-cart__content-2_form-item">
                  <p>First Name </p>
                  <input
                    className="popup-cart__content-2_form-item-input"
                    placeholder="John/Jane"
                    type="text"
                    onChange={(e) => {
                      if (
                        e.target.value[e.target.value.length - 1] === " " &&
                        e.target.value[e.target.value.length - 2] === " "
                      )
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.value.length - 1
                        );
                      const FirstnamePattern =
                        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
                      if (
                        FirstnamePattern.test(e.target.value) &&
                        e.target.value.trim() !== ""
                      )
                        return setTransaction((prevState) => {
                          return {
                            ...prevState,
                            firstname: { value: e.target.value, valid: true },
                          };
                        });
                      return setTransaction((prevState) => {
                        return {
                          ...prevState,
                          firstname: { value: e.target.value, valid: false },
                        };
                      });
                    }}
                  />
                  <p>Last Name </p>
                  <input
                    className="popup-cart__content-2_form-item-input"
                    placeholder="Doe"
                    type="text"
                    onChange={(e) => {
                      if (
                        e.target.value[e.target.value.length - 1] === " " &&
                        e.target.value[e.target.value.length - 2] === " "
                      )
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.value.length - 1
                        );
                      const LastnamePattern =
                        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
                      if (
                        LastnamePattern.test(e.target.value) &&
                        e.target.value.trim() !== ""
                      )
                        return setTransaction((prevState) => {
                          return {
                            ...prevState,
                            lastname: {
                              value: e.target.value.trim(),
                              valid: true,
                            },
                          };
                        });
                      return setTransaction((prevState) => {
                        return {
                          ...prevState,
                          lastname: {
                            value: e.target.value.trim(),
                            valid: false,
                          },
                        };
                      });
                    }}
                  />
                </div>
                <div className="popup-cart__content-2_form-item">
                  <p>Email </p>
                  <input
                    className="popup-cart__content-2_form-item-input"
                    placeholder="anonymou@gmail.com"
                    type="email"
                    onChange={(e) => {
                      if (
                        e.target.value[e.target.value.length - 1] === " " &&
                        e.target.value[e.target.value.length - 2] === " "
                      )
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.value.length - 1
                        );

                      if (
                        e.target.value.includes("@") &&
                        e.target.value.trim() !== ""
                      )
                        return setTransaction((prevState) => {
                          return {
                            ...prevState,
                            email: {
                              value: e.target.value.trim(),
                              valid: true,
                            },
                          };
                        });
                      return setTransaction((prevState) => {
                        return {
                          ...prevState,
                          email: { value: e.target.value.trim(), valid: false },
                        };
                      });
                    }}
                  />
                  <p>Phone Number </p>
                  <input
                    className="popup-cart__content-2_form-item-input"
                    placeholder="+12 345 678 912"
                    type="tel"
                    onChange={(e) => {
                      if (
                        e.target.value[e.target.value.length - 1] === " " &&
                        e.target.value[e.target.value.length - 2] === " "
                      )
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.value.length - 1
                        );
                      const PhoneNumberPattern = /^[0-9+]+$/u;
                      if (
                        PhoneNumberPattern.test(e.target.value) &&
                        e.target.value.trim() !== ""
                      )
                        return setTransaction((prevState) => {
                          return {
                            ...prevState,
                            phoneNumber: {
                              value: e.target.value.trim(),
                              valid: true,
                            },
                          };
                        });
                      return setTransaction((prevState) => {
                        return {
                          ...prevState,
                          phoneNumber: {
                            value: e.target.value.trim(),
                            valid: false,
                          },
                        };
                      });
                    }}
                  />
                </div>
                <div className="popup-cart__content-2_form-item">
                  <p>Address </p>
                  <textarea
                    placeholder="Enter address"
                    className="popup-cart__content-2_form-item-input popup-cart__content-2_form-textarea"
                    rows="2"
                    cols="50"
                    onChange={(e) => {
                      if (
                        e.target.value[e.target.value.length - 1] === " " &&
                        e.target.value[e.target.value.length - 2] === " "
                      )
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.value.length - 1
                        );

                      if (e.target.value.trim() !== "")
                        return setTransaction((prevState) => {
                          return {
                            ...prevState,
                            address: {
                              value: e.target.value.trim(),
                              valid: true,
                            },
                          };
                        });
                      return setTransaction((prevState) => {
                        return {
                          ...prevState,
                          address: {
                            value: e.target.value.trim(),
                            valid: false,
                          },
                        };
                      });
                    }}
                  />
                  <p>Postal code </p>
                  <input
                    className="popup-cart__content-2_form-item-input"
                    placeholder="Enter postal code"
                    type="text"
                    onChange={(e) => {
                      if (
                        e.target.value[e.target.value.length - 1] === " " &&
                        e.target.value[e.target.value.length - 2] === " "
                      )
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.value.length - 1
                        );

                      const PhoneNumberPattern = /^[0-9A-Z-]+$/u;

                      if (
                        PhoneNumberPattern.test(e.target.value) &&
                        e.target.value.trim() !== ""
                      )
                        return setTransaction((prevState) => {
                          return {
                            ...prevState,
                            postalCode: {
                              value: e.target.value.trim(),
                              valid: true,
                            },
                          };
                        });
                      return setTransaction((prevState) => {
                        return {
                          ...prevState,
                          postalCode: {
                            value: e.target.value.trim(),
                            valid: false,
                          },
                        };
                      });
                    }}
                  />
                </div>
              </div>
              <div className="popup-cart__content-2_delivery">
                <p className="popup-cart__content-2_delivery-header">
                  Delivery Type
                </p>
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
                        onClick={(e) => {
                          setTransaction((prevState) => {
                            return {
                              ...prevState,
                              deliveryType: {
                                value: e.target.value,
                                valid: true,
                              },
                            };
                          });
                        }}
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
                        onClick={(e) => {
                          setTransaction((prevState) => {
                            return {
                              ...prevState,
                              deliveryType: {
                                value: e.target.value,
                                valid: true,
                              },
                            };
                          });
                        }}
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
                disabled={
                  !transaction.firstname.valid ||
                  !transaction.lastname.valid ||
                  !transaction.email.valid ||
                  !transaction.phoneNumber.valid ||
                  !transaction.address.valid ||
                  !transaction.postalCode.valid ||
                  !transaction.deliveryType.valid
                }
                onClick={() => {
                  document
                    .querySelectorAll(".popup-cart__content-2_form-item-input")
                    .forEach((e) => {
                      if (e.placeholder) return (e.value = "");
                      return (e.checked = false);
                    });
                  setTransaction((prevState) => {
                    return {
                      ...prevState,
                      page: prevState?.page + 1,
                    };
                  });
                }}
                className="popup-cart__content-2-btn"
              >
                Finish Transaction
              </button>
            </div>
          )}

          {cartState.length !== 0 && (
            <div
              style={{
                transform: `translateX(${300 - transaction.page * 100}vw)`,
                visibility: `${
                  transaction.page === 3 && visibility ? "visible" : "hidden"
                }`,
                opacity: `${transaction.page === 3 ? "1" : "0"}`,
              }}
              className="popup-cart__content-3"
            >
              <ImCheckmark className="popup-cart__content-3-icon" />
              <p className="popup-cart__content-3-text">
                Thanks for test my app!
              </p>
            </div>
          )}
          {cartState.length === 0 && (
            <span className="popup-cart__content-none">
              There Is Nothing In The Cart
            </span>
          )}

          <div
            onClick={() => {
              dispatch(setVisibility(false));
            }}
            className="popup-cart__content_exit"
          >
            <div className="popup-cart__content_exit-line-1"></div>
            <div className="popup-cart__content_exit-line-2"></div>
          </div>

          <ImArrowLeft2
            style={{
              display: `${transaction.page !== 2 ? "none" : "block"}`,
            }}
            onClick={() =>
              setTransaction((prevState) => {
                return {
                  ...prevState,
                  page: prevState?.page - 1,
                };
              })
            }
            className="popup-cart__content_prevPage"
          />
        </div>
      </div>
    </>
  );
};

export default PopUpCart;
