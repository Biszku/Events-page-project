import { useState } from "react";

import HeaderSection from "./components/Header/MainHeader";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About us Section/AboutUs";
import BookSection from "./components/Book section/Book";
import GallerySection from "./components/Gallery/Gallery";
import Offert from "./components/Offert/Offert";

function App() {
  const [cart, setCart] = useState([]);
  const [visibility, setVisibility] = useState(false);

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
          addToCart={(newEvent) => {
            setCart((prevState) => [newEvent, ...prevState]);
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
      ></div>
    </div>
  );
}

export default App;
