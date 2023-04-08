import { useState, useEffect } from "react";

function Book() {
  const [events, setEvents] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.seatgeek.com/2/events?per_page=50&q=${inputValue}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Basic " +
              btoa(
                `${process.env.REACT_APP_API_CLIENT}:${process.env.REACT_APP_API_SECRET}`
              ),
          },
        }
      );
      const data = await res.json();
      console.log(data);
      const dataFilteredByTitle = data.events.filter(
        (obj) =>
          obj.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          obj.short_title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setEvents(dataFilteredByTitle);
    };
    if (!firstLoad) {
      if (inputValue.trim().length === 0) return;
      const timer = setTimeout(() => fetchData(), 500);
      return () => {
        clearInterval(timer);
        setEvents([]);
      };
    }
  }, [inputValue]);

  useEffect(() => {
    if (!firstLoad) {
      setLoading(false);
      console.log(events);
    } else {
      setFirstLoad(false);
    }
  }, [events]);

  return (
    <section className="Book__section">
      <div className="Book__section__inputContainer">
        <input
          className="Book__section__inputContainer-input"
          type="text"
          placeholder="Enter event name"
          onChange={(e) => setInputValue(e.target.value)}
        />
        {loading && <div className="spinner spinner-input"></div>}
      </div>
      <div className="Book__section__output">
        {events.length === 0 && !loading && (
          <div className="noResultContainer">
            <p>No results...</p>
          </div>
        )}
        {events.map((el) => {
          return (
            <div key={el.id} className="Book__section__output-item">
              <figure className="Book__section__output-item-img">
                <img src={el.performers[0].image} alt="elo" />
              </figure>
              <p>{el.short_title}</p>
              <p>{el.stats.lowest_price ? el.stats.lowest_price + "$" : "-"}</p>
              <p>
                {el.stats.average_price ? el.stats.average_price + "$" : "-"}
              </p>
              <p>
                {el.stats.highest_price ? el.stats.highest_price + "$" : "-"}
              </p>
              <div
                className="popularity_container"
                style={{
                  background: `linear-gradient(to right, #5d5dd5 0%, #5d5dd5 ${
                    el.popularity * 100
                  }%, rgba(255, 255, 255, 0.6) ${el.popularity * 100}%)`,
                }}
              >
                {el.popularity}
              </div>
              <span>name</span>
              <span>min price</span>
              <span>avg price</span>
              <span>max price</span>
              <span>popularity</span>
            </div>
          );
        })}
      </div>
      <div className="Book__section__asideElement"></div>
    </section>
  );
}

export default Book;
