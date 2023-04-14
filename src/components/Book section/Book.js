import { useState, useEffect } from "react";

function Book() {
  const [events, setEvents] = useState([]);
  const [fetchPage, setFetchPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [eventsArrLength, setEventsArrLength] = useState();
  const [paginationArray, setPaginationArray] = useState([]);
  // const [actualPageSection, setActualPageSection] = useState([]);

  //Data fetching
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.seatgeek.com/2/events?per_page=50&page=${fetchPage}&q=${inputValue}`,
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
      const dataFilteredByTitle = data.events.filter(
        (obj) =>
          obj.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          obj.short_title.toLowerCase().includes(inputValue.toLowerCase())
      );

      for (let i = 0; i < dataFilteredByTitle.length; i += 5) {
        const pagesInArray = dataFilteredByTitle.slice(i, i + 5);
        setPaginationArray((PrevState) => [...PrevState, pagesInArray]);
      }
    };

    if (!firstLoad) {
      if (inputValue.trim().length === 0) return;
      const timer = setTimeout(() => fetchData(), 500);
      return () => {
        clearInterval(timer);
        setEvents([]);
        setFetchPage(1);
        setPage(0);
        setPaginationArray([]);
        setEventsArrLength();
      };
    }
  }, [inputValue]);

  // Add events to array and pagination
  useEffect(() => {
    setEventsArrLength(paginationArray.length);
    setEvents(paginationArray);
  }, [paginationArray]);

  // Deleting loading and disable first fetching
  useEffect(() => {
    if (!firstLoad) setLoading(false);
    else setFirstLoad(false);
  }, [events]);

  // Prev page
  const prevPageHandler = () => {
    setPage((PrevPage) => (PrevPage -= 1));
  };

  // Next page
  const nextPageHandler = () => {
    setPage((PrevPage) => (PrevPage += 1));
  };

  //Next pages inrease
  const changePageHandler = (num) => {
    setFetchPage((PrevState) => (PrevState += 1));
    setPage(num);
  };

  // Initialization fetching more data
  useEffect(() => {
    if (page === eventsArrLength - 1) fetchMoreData();
  }, [page]);

  // Fetching more data
  const fetchMoreData = async () => {
    const res = await fetch(
      `https://api.seatgeek.com/2/events?per_page=50&page=${fetchPage}&q=${inputValue}`,
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
    const dataFilteredByTitle = data.events.filter(
      (obj) =>
        obj.title.toLowerCase().includes(inputValue.toLowerCase()) ||
        obj.short_title.toLowerCase().includes(inputValue.toLowerCase())
    );
    // const FullArray = [paginationArray.flat(1), dataFilteredByTitle].flat(1);
    // console.log(FullArray);
    for (let i = 0; i < dataFilteredByTitle.length; i += 5) {
      const pagesInArray = dataFilteredByTitle.slice(i, i + 5);
      setPaginationArray((PrevState) => [...PrevState, pagesInArray]);
    }
  };

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
        {events.length > 0 &&
          events[page].map((el) => {
            return (
              <div key={el.id} className="Book__section__output-item">
                <figure className="Book__section__output-item-img">
                  <img
                    src={el.performers[0].image}
                    alt={el.performers[0].name}
                  />
                </figure>
                <p>{el.short_title}</p>
                <p>
                  {el.stats.lowest_price ? el.stats.lowest_price + "$" : "-"}
                </p>
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

      {events.length > 1 && (
        <div className="Book__section__pagination">
          <button
            style={{ visibility: page > 0 ? "visible" : "hidden" }}
            className="Book__section__pagination-button"
            onClick={prevPageHandler}
          >
            {"<"}
          </button>

          <div className="Book__section__pagination-pagination">
            {events.length > 0 &&
              events.map((arr, numOfIndex) => (
                <button
                  className={`Book__section__pagination-pagination-button ${
                    page === numOfIndex ? "active-button" : ""
                  }`}
                  key={numOfIndex}
                  onClick={() => changePageHandler(numOfIndex)}
                >
                  {numOfIndex + 1}
                </button>
              ))}
          </div>
          <button
            style={{
              visibility: page < events.length - 1 ? "visible" : "hidden",
            }}
            className="Book__section__pagination-button"
            onClick={nextPageHandler}
          >
            {">"}
          </button>
        </div>
      )}
    </section>
  );
}

export default Book;
