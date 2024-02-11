import { useEffect, useReducer, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import BookElement from "./BookElement";
import PopUpElement from "./PopUpElement";

function reducer(state, action) {
  switch (action.type) {
    case "SET_EVENTS":
      return { ...state, events: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "LIMIT_PAGE":
      return { ...state, limitPage: action.payload };
    default:
      return state;
  }
}

let inputValue = "";

function Book(props) {
  const [state, dispatch] = useReducer(reducer, {
    events: [],
    loading: false,
    page: 0,
    limitPage: 10,
  });

  const [activeButton, SetActiveButton] = useState(true);

  const [Storage, SetStorage] = useState([]);

  const [IsVisible, SetIsVisible] = useState(false);

  const [CurrentEvent, SetCurrentEvent] = useState();

  const { mutate } = useMutation({
    mutationFn: (inputV) => {
      inputValue = inputV;
    },
  });

  const { isFetching, data } = useQuery({
    initialData: [],
    queryKey: [inputValue],
    queryFn: async () => {
      if (!inputValue) return [];
      const res = await fetch(
        `https://api.seatgeek.com/2/events?per_page=50&q=${inputValue}`,
        {
          headers: {
            Authorization:
              "Basic " +
              btoa(
                `${process.env.REACT_APP_API_CLIENT}:${process.env.REACT_APP_API_SECRET}`
              ),
          },
        }
      );
      const resJSON = await res.json();

      const filteredData = resJSON.events.filter((obj) =>
        obj.title.toLowerCase().includes(inputValue.toLowerCase().trim())
      );
      const data = [];

      for (let i = 0; i < filteredData.length; i += 5) {
        const pagesInArray = filteredData.slice(i, i + 5);
        data.push(pagesInArray);
      }
      return data;
    },
  });

  console.log(data);

  // useEffect(() => {
  //   if (!localStorage.getItem("historyData"))
  //     SetStorage(() =>
  //       JSON.parse(localStorage.getItem("historyData")).filter(
  //         (event) =>
  //           event.datetime_utc >
  //           new Date().toLocaleString("en-US", { timeZone: "UTC" })
  //       )
  //     );
  // }, []);

  //Data fetching
  // useEffect(() => {
  //   let loading = false;
  //   const fetchData = async () => {
  //     dispatch({ type: "SET_LOADING", payload: true });
  //     loading = true;
  //     const tempArr = [];
  //     const res = await fetch(
  //       `https://api.seatgeek.com/2/events?per_page=5000&page=1&q=${state.inputValue}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization:
  //             "Basic " +
  //             btoa(
  //               `${process.env.REACT_APP_API_CLIENT}:${process.env.REACT_APP_API_SECRET}`
  //             ),
  //         },
  //       }
  //     );
  //     const data = await res.json();

  //     const dataFilteredByTitle = data.events.filter((obj) =>
  //       obj.title.toLowerCase().includes(state.inputValue.toLowerCase().trim())
  //     );

  //     for (let i = 0; i < dataFilteredByTitle.length; i += 5) {
  //       const pagesInArray = dataFilteredByTitle.slice(i, i + 5);
  //       tempArr.push(pagesInArray);
  //     }

  //     if (loading) {
  //       dispatch({ type: "SET_EVENTS", payload: tempArr });
  //     }
  //     dispatch({ type: "SET_LOADING", payload: false });
  //     loading = false;
  //   };

  //   const timer = setTimeout(
  //     () => state.inputValue.trim().length > 0 && fetchData(),
  //     500
  //   );
  //   return () => {
  //     clearInterval(timer);
  //     dispatch({ type: "SET_EVENTS", payload: [] });
  //     dispatch({ type: "SET_FETCH_PAGE", payload: 1 });
  //     dispatch({ type: "SET_PAGE", payload: 0 });
  //     dispatch({ type: "LIMIT_PAGE", payload: 10 });
  //     dispatch({ type: "SET_LOADING", payload: false });
  //     loading = false;
  //   };
  // }, [state.inputValue]);

  // Prev page
  const prevPageHandler = () => {
    dispatch({ type: "SET_PAGE", payload: state.page - 1 });
    if (state.page < state.limitPage - 9) {
      dispatch({ type: "LIMIT_PAGE", payload: state.limitPage - 10 });
    }
  };

  // Next page
  const nextPageHandler = () => {
    dispatch({ type: "SET_PAGE", payload: state.page + 1 });
    if (state.page > state.limitPage - 3) {
      dispatch({ type: "LIMIT_PAGE", payload: state.limitPage + 10 });
    }
  };

  //Page click Handler
  const changePageHandler = (num) => {
    dispatch({ type: "SET_PAGE", payload: num });
  };

  return (
    <section className="Book__section" id="Book__section">
      <div className="Book__section__inputContainer">
        <input
          className="Book__section__inputContainer-input"
          type="text"
          placeholder="Enter event name"
          onChange={(e) => mutate(e.target.value)}
        />
        {isFetching && <div className="spinner spinner-input"></div>}
      </div>
      <div className="Book__section__output">
        {!isFetching && inputValue && data.length < 1 && (
          <div className="noResultContainer">
            <p>No results...</p>
          </div>
        )}
        {data.length > 0 &&
          data[state.page].map((el) => {
            return (
              <BookElement
                key={el.id}
                data={el}
                setCurData={() => {
                  SetIsVisible(true);
                  SetActiveButton(false);
                  SetCurrentEvent(el);
                }}
              />
            );
          })}
      </div>
      <div className="Book__section__asideElement">
        {Storage.map((historyEvent) => {
          return (
            <div
              key={historyEvent.id}
              onClick={() => {
                SetIsVisible(true);
                SetActiveButton(false);
                SetCurrentEvent(historyEvent);
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
            style={{ visibility: state.page > 0 ? "visible" : "hidden" }}
            className="Book__section__pagination-button"
            onClick={prevPageHandler}
            disabled={!activeButton && "disabled"}
          >
            {"<"}
          </button>

          <div className="Book__section__pagination-pagination">
            {data.length > 0 &&
              data.map((arr, numOfIndex) => {
                if (
                  numOfIndex < state.limitPage &&
                  numOfIndex >= state.limitPage - 10
                )
                  return (
                    <button
                      className={`Book__section__pagination-pagination-button ${
                        state.page === numOfIndex ? "active-button" : ""
                      }`}
                      key={numOfIndex}
                      onClick={() => changePageHandler(numOfIndex)}
                      disabled={!activeButton && "disabled"}
                    >
                      {numOfIndex + 1}
                    </button>
                  );
              })}
          </div>

          <button
            style={{
              visibility: state.page < data.length - 1 ? "visible" : "hidden",
            }}
            className="Book__section__pagination-button"
            onClick={nextPageHandler}
            disabled={!activeButton && "disabled"}
          >
            {">"}
          </button>
        </div>
      )}

      {/* <PopUpElement
        cart={props.cart}
        memory={Storage}
        addToCart={props.addToCart}
        SetMemory={SetStorage}
        enableButton={() => SetActiveButton(true)}
        data={CurrentEvent}
        visible={IsVisible}
        close={() => SetIsVisible(false)}
      /> */}
    </section>
  );
}

export default Book;
