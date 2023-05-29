import { useState, useEffect } from "react";

import HeaderSection from "./components/Header/MainHeader";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About us Section/AboutUs";
import BookSection from "./components/Book section/Book";
import GallerySection from "./components/Gallery/Gallery";
import Offert from "./components/Offert/Offert";

function App() {
  const [cart, setCart] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [transaction, setTransaction] = useState([
    {
      page: 1,
      email: "",
      name: "",
      surname: "",
      phoneNumber: "",
      address: "",
      deliveryType: "",
    },
  ]);

  useEffect(() => {
    localStorage.getItem("cart") === null
      ? setCart([])
      : setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  document.body.addEventListener("keydown", (event) => {
    !(event.key === "escape") && setVisibility(false);
  });

  return (
    <div className="container">
      <HeaderSection cart={cart} SetVisibilityOn={() => setVisibility(true)} />
      <main>
        <AboutUs />
        <Offert />
        <BookSection
          addToCart={(newEvent, newCart) => {
            setCart((prevState) => [newEvent, ...prevState]);
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
        onClick={() => setVisibility(false)}
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
                    transaction[0].page === 1
                      ? "rgb(128 ,44 ,149 , 0.6)"
                      : "rgb(246 246 246)",
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
                    transaction[0].page === 2
                      ? "rgb(128 44 149 / 69%)"
                      : "rgb(246 246 246)",
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
                    transaction[0].page === 3
                      ? "rgb(128 44 149 / 69%)"
                      : "rgb(246 246 246)",
                }}
              >
                3
              </span>
            </div>
          </div>
        )}
        {cart.length !== 0 && (
          <div className="popup-cart__content-1">
            <div className="popup-cart__content-1_events-container">
              <div className="popup-cart__content-1_events-container_event"></div>
            </div>
            <div className="popup-cart__content-1_summary-container"></div>
          </div>
        )}
        <div className="popup-cart__content-2"></div>
        <div className="popup-cart__content-3"></div>
        {cart.length === 0 && (
          <span className="popup-cart__content-none">
            There Is Nothing In The Cart
          </span>
        )}
      </div>
    </div>
  );
}

export default App;
