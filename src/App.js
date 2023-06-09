import { useState, useEffect } from "react";
import {
  ImBin,
  ImCircleLeft,
  ImCircleRight,
  ImTruck,
  ImArrowLeft2,
  ImCheckmark,
} from "react-icons/im";

import HeaderSection from "./components/Header/MainHeader";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About us Section/AboutUs";
import BookSection from "./components/Book section/Book";
import GallerySection from "./components/Gallery/Gallery";
import Offert from "./components/Offert/Offert";

function App() {
  const [cart, setCart] = useState([]);
  const [visibility, setVisibility] = useState(false);
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

  useEffect(() => {
    localStorage.getItem("cart") === null
      ? setCart([])
      : setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  document.body.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setVisibility(false);
      if (transaction.page === 3) {
        setCart([]);
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

  const IncreaseQuantity = (quantity, eventID, HTMLElement) => {
    setCart((prevState) =>
      prevState.map((event) => {
        if (event.id === eventID) {
          if (+quantity < 1 || isNaN(+quantity) || quantity === "") {
            HTMLElement.value = "";
            const Newcarthistory = JSON.parse(localStorage.getItem("cart")).map(
              (event) => {
                if (event.id === eventID) return { ...event, amount: 1 };
                return event;
              }
            );
            localStorage.setItem("cart", JSON.stringify(Newcarthistory));
            return { ...event, amount: 0 };
          }
          HTMLElement.value = quantity.trim();
          const Newcarthistory = JSON.parse(localStorage.getItem("cart")).map(
            (event) => {
              if (event.id === eventID) return { ...event, amount: quantity };
              return event;
            }
          );
          localStorage.setItem("cart", JSON.stringify(Newcarthistory));
          return { ...event, amount: +quantity };
        }
        return event;
      })
    );
  };

  const IncreaseQuantityByOne = (eventID, ElementIndex) => {
    const HTMLEl = document.querySelector(`.inputNumber-${ElementIndex}`);
    setCart((prevState) =>
      prevState.map((event) => {
        if (eventID === event.id) {
          HTMLEl.value = +HTMLEl.value + 1;
          const newHistory = JSON.parse(localStorage.getItem("cart")).map(
            (eventEl) => {
              if (eventEl.id === eventID)
                return { ...eventEl, amount: eventEl.amount + 1 };
              return eventEl;
            }
          );
          localStorage.setItem("cart", JSON.stringify(newHistory));
          return { ...event, amount: +event.amount + 1 };
        }
        return event;
      })
    );
  };

  const DecreaseQuantityByOne = (eventID, ElementIndex) => {
    const HTMLEl = document.querySelector(`.inputNumber-${ElementIndex}`);
    setCart((prevState) =>
      prevState.map((event) => {
        if (eventID === event.id && event.amount > 1) {
          HTMLEl.value -= 1;
          const newHistory = JSON.parse(localStorage.getItem("cart")).map(
            (eventEl) => {
              if (eventEl.id === eventID)
                return { ...eventEl, amount: eventEl.amount - 1 };
              return eventEl;
            }
          );
          localStorage.setItem("cart", JSON.stringify(newHistory));
          return { ...event, amount: +event.amount - 1 };
        }
        return event;
      })
    );
  };

  return (
    <div className="container">
      <HeaderSection cart={cart} SetVisibilityOn={() => setVisibility(true)} />
      <main>
        <AboutUs />
        <Offert />
        <BookSection
          addToCart={(newEvent, newCart) => {
            setCart((prevState) => [{ ...newEvent, amount: 1 }, ...prevState]);
            localStorage.setItem("cart", JSON.stringify(newCart));
          }}
          cart={cart}
        />
        <GallerySection />
      </main>
      <Footer />
      <div
        className="popup-cart"
        style={{
          visibility: visibility ? "visible" : "hidden",
          transform: visibility ? "translateY(0vh)" : "translateY(180vh)",
        }}
        onClick={() => {
          setVisibility(false);
          if (transaction.page === 3) {
            setCart([]);
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
      ></div>
      <div
        className="popup-cart__content"
        style={{
          visibility: visibility ? "visible" : "hidden",
          transform: visibility
            ? "translate(-50%, -50%)"
            : "translate(-50%, 100%)",
        }}
      >
        {cart.length !== 0 && (
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
        {cart.length !== 0 && (
          <div
            style={{
              transform: `translateX(${100 - transaction.page * 100}vw)`,
              visibility: `${transaction.page === 1 ? "visible" : "invisible"}`,
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
                {cart.map((obj, index) => (
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
                    <ImBin
                      onClick={() => {
                        setCart(cart.filter((el) => el.id !== obj.id));
                        const historydata = JSON.parse(
                          localStorage.getItem("cart")
                        );
                        localStorage.setItem(
                          "cart",
                          JSON.stringify(
                            historydata.filter((el) => el.id !== obj.id)
                          )
                        );
                      }}
                      className="popup-cart__content-1_events-container-events-item-thrashIcon"
                    />
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
                  {`${cart.reduce(
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
                    cart.reduce(
                      (sum, cur) => sum + cur?.stats.median_price * cur?.amount,
                      0
                    ) -
                    cart.reduce(
                      (sum, cur) => sum + cur?.stats.lowest_price * cur?.amount,
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
                      totalPrice: cart.reduce(
                        (sum, cur) =>
                          sum + cur?.stats.lowest_price * cur?.amount,
                        0
                      ),
                    };
                  })
                }
                disabled={
                  cart.reduce((sum, event) => {
                    if (event.amount !== 0) return sum + 1;
                    return sum;
                  }, 0) < cart.length
                }
                className="popup-cart__content-1_summary-container-summaryButton"
              >
                proceed to checkout
              </button>
            </div>
          </div>
        )}
        <div
          style={{
            transform: `translateX(${200 - transaction.page * 100}vw)`,
            visibility: `${transaction.page === 2 ? "visible" : "invisible"}`,
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
                        lastname: { value: e.target.value.trim(), valid: true },
                      };
                    });
                  return setTransaction((prevState) => {
                    return {
                      ...prevState,
                      lastname: { value: e.target.value.trim(), valid: false },
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
                        email: { value: e.target.value.trim(), valid: true },
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
        <div
          style={{
            transform: `translateX(${300 - transaction.page * 100}vw)`,
            visibility: `${transaction.page === 3 ? "visible" : "invisible"}`,
            opacity: `${transaction.page === 3 ? "1" : "0"}`,
          }}
          className="popup-cart__content-3"
        >
          <ImCheckmark className="popup-cart__content-3-icon" />
          <p className="popup-cart__content-3-text">Thanks for test my app!</p>
        </div>
        {cart.length === 0 && (
          <span className="popup-cart__content-none">
            There Is Nothing In The Cart
          </span>
        )}

        <div
          onClick={() => {
            setVisibility(false);
            if (transaction.page === 3) {
              setCart([]);
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
  );
}

export default App;
