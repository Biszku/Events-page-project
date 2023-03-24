function Book() {
  return (
    <section className="Book__section">
      <div className="Book__section__inputContainer">
        <input
          className="Book__section__inputContainer-input"
          type="text"
          placeholder="Enter event name"
        />
      </div>
      <div className="Book__section__output"></div>
      <div className="Book__section__asideElement"></div>
    </section>
  );
}

export default Book;
