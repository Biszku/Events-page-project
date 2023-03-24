import HeaderSection from "./components/Header/MainHeader";

function App() {
  return (
    <div className="container">
      <HeaderSection></HeaderSection>
      <main>
        <div>
          <h2>About us</h2>
        </div>
        <div>
          <h2>Offert</h2>
        </div>
        <div>
          <h2>Book event</h2>
        </div>
        <div>
          <h2>Gallery</h2>
        </div>
      </main>
      <div>
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
