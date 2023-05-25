import { useState } from "react";

import HeaderSection from "./components/Header/MainHeader";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About us Section/AboutUs";
import BookSection from "./components/Book section/Book";
import GallerySection from "./components/Gallery/Gallery";
import Offert from "./components/Offert/Offert";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="container">
      <HeaderSection />
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
    </div>
  );
}

export default App;
