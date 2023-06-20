function BookElement(props) {
  return (
    <div
      key={props.data.id}
      onClick={props.setCurData}
      className="Book__section__output-item"
    >
      <figure className="Book__section__output-item-img">
        <img
          src={props.data.performers[0].image}
          alt={props.data.performers[0].name}
        />
      </figure>
      <p className="Book__section__output-item_title">
        {props.data.short_title}
      </p>
      <p className="Book__section__output-item_lowest-price">
        {props.data.stats.lowest_price
          ? props.data.stats.lowest_price + "$"
          : "-"}
      </p>
      <p className="Book__section__output-item_average-price">
        {props.data.stats.average_price
          ? props.data.stats.average_price + "$"
          : "-"}
      </p>
      <p className="Book__section__output-item_highest-price">
        {props.data.stats.highest_price
          ? props.data.stats.highest_price + "$"
          : "-"}
      </p>
      <div
        className="popularity_container"
        style={{
          background: `linear-gradient(to right, #5d5dd5 0%, #5d5dd5 ${
            props.data.popularity * 100
          }%, rgba(255, 255, 255, 0.6) ${props.data.popularity * 100}%)`,
        }}
      >
        {props.data.popularity}
      </div>
      <span className="Book__section__output-item_name">name</span>
      <span className="Book__section__output-item_min-price-span">
        min price
      </span>
      <span className="Book__section__output-item_avg-price-span">
        avg price
      </span>
      <span className="Book__section__output-item_max-price-span">
        max price
      </span>
      <span className="Book__section__output-item_popularity-span">
        popularity
      </span>
    </div>
  );
}

export default BookElement;
