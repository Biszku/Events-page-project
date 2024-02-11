const fetchEvents = async (inputValue) => {
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
};

export default fetchEvents;
