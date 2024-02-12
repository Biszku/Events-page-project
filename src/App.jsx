import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HeaderSection from "./components/Header/MainHeader";
import AboutUs from "./components/aboutUsSection/AboutUs";
import Offert from "./components/Offert/Offert";
import BookSection from "./components/bookSection/Book";
import GallerySection from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import PopUpCart from "./components/popUp/popUpCart";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <HeaderSection />
        <main>
          <AboutUs />
          <Offert />
          <BookSection />
          <GallerySection />
        </main>
        <Footer />
        <PopUpCart />
      </div>
    </QueryClientProvider>
  );
}

export default App;
