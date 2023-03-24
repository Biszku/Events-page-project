import HeaderSection from "./components/Header/MainHeader";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About us Section/AboutUs";
import BookSection from "./components/Book section/Book";
import GallerySection from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="container">
      <HeaderSection />
      <main>
        <AboutUs />
        <div>
          <h2>Offert</h2>
        </div>
        <BookSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
