import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import BookElement from "./BookElement";
import PopUpElement from "./PopUpElement";
import fetchEvents from "../../features/eventsFetching/eventFetching";
import InputComponent from "./Input";

let inputValue = "";

const bookmarkStore = () => {
  let bookmarkEvents = JSON.parse(localStorage.getItem("historyData"));
  if (!bookmarkEvents) return [];
  return bookmarkEvents;
};

function Book() {
  const [curPage, setCurPage] = useState(0);
  const [limitPage, setLimitPage] = useState([0, 9]);
  const [activeButtons, setActiveButtons] = useState(true);
  const [popUpVisibility, setPopUpVisibility] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [bookmarkEvents, setBookmarkEvents] = useState([...bookmarkStore()]);

  const { mutate } = useMutation({
    mutationFn: (inputV) => {
      inputValue = inputV;
    },
  });

  const { isFetching, data } = useQuery({
    initialData: [],
    queryKey: [inputValue],
    queryFn: async () => fetchEvents(inputValue),
  });

  // Prev page
  const prevPageHandler = () => {
    if (curPage - 1 === limitPage[0] && curPage - 1 !== 0) {
      setLimitPage((prev) => prev.map((num) => num - 5));
    }
    setCurPage((prev) => prev - 1);
  };

  // Next page
  const nextPageHandler = () => {
    if (curPage === limitPage[1] - 1) {
      setLimitPage((prev) => prev.map((num) => num + 5));
    }
    setCurPage((prev) => prev + 1);
  };

  //Page click Handler
  const changePageHandler = (num) => {
    if (num === limitPage[1])
      setLimitPage((prev) => prev.map((num) => num + 5));
    if (num === limitPage[0] && num !== 0)
      setLimitPage((prev) => prev.map((num) => num - 5));
    setCurPage(num);
  };

  //Add bookmark
  const addBookmark = (event) => {
    let bookmarkEvents = JSON.parse(localStorage.getItem("historyData"));
    if (!bookmarkEvents) bookmarkEvents = [];
    bookmarkEvents.push(event);
    localStorage.setItem("historyData", JSON.stringify(bookmarkEvents));

    setBookmarkEvents((prev) => [event, ...prev]);
  };

  //Filter bookmark
  const filterBookmark = (event) => {
    const bookmarkEvents = JSON.parse(localStorage.getItem("historyData"));
    const filteredBookmarks = bookmarkEvents.filter((e) => e.id !== event.id);
    localStorage.setItem("historyData", JSON.stringify(filteredBookmarks));

    setBookmarkEvents(filteredBookmarks);
  };

  return (
    <section className="Book__section" id="Book__section">
      <InputComponent
        isFetching={isFetching}
        setCurPage={setCurPage}
        setLimitPage={setLimitPage}
        mutate={mutate}
      />
      <div className="Book__section__output">
        {!isFetching && inputValue && data.length < 1 && (
          <div className="noResultContainer">
            <p>No results...</p>
          </div>
        )}
        {data.length > 0 &&
          data[curPage]?.map((el) => {
            return (
              <BookElement
                key={el.id}
                data={el}
                setCurData={() => {
                  setPopUpVisibility(true);
                  setActiveButtons(false);
                  setCurrentEvent(el);
                }}
              />
            );
          })}
      </div>
      <div className="Book__section__asideElement">
        {bookmarkEvents?.map((historyEvent) => {
          return (
            <div
              key={historyEvent.id}
              onClick={() => {
                setPopUpVisibility(true);
                setActiveButtons(false);
                setCurrentEvent(historyEvent);
              }}
              className="Book__section__asideElement-element"
            >
              <p>{historyEvent.short_title}</p>
            </div>
          );
        })}
      </div>

      {data.length > 1 && (
        <div className="Book__section__pagination">
          <button
            className={`Book__section__pagination-button ${
              curPage > 0 ? "" : "hidden-button"
            }`}
            onClick={prevPageHandler}
            disabled={!activeButtons && "disabled"}
          >
            {"<"}
          </button>

          <div className="Book__section__pagination-pagination">
            {data.map((arr, numOfIndex) => {
              if (numOfIndex >= limitPage[0] && numOfIndex <= limitPage[1])
                return (
                  <button
                    className={`Book__section__pagination-pagination-button ${
                      curPage === numOfIndex ? "active-button" : ""
                    }`}
                    key={numOfIndex}
                    onClick={() => changePageHandler(numOfIndex)}
                    disabled={!activeButtons && "disabled"}
                  >
                    {numOfIndex + 1}
                  </button>
                );
              return null;
            })}
          </div>

          <button
            className={`Book__section__pagination-button ${
              curPage < data.length - 1 ? "" : "hidden-button"
            }`}
            onClick={nextPageHandler}
            disabled={!activeButtons && "disabled"}
          >
            {">"}
          </button>
        </div>
      )}

      <PopUpElement
        bookmarkEvents={bookmarkEvents}
        data={currentEvent}
        visible={popUpVisibility}
        close={() => setPopUpVisibility(false)}
        enableButton={() => setActiveButtons(true)}
        addBookmark={addBookmark}
        filterBookmark={filterBookmark}
        setCurrentEvent={setCurrentEvent}
      />
    </section>
  );
}

export default Book;
