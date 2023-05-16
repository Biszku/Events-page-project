function BookElement(props) {
  return (
    <div key={props.data.id} className="Book__section__output-item">
      <figure className="Book__section__output-item-img">
        <img
          src={props.data.performers[0].image}
          alt={props.data.performers[0].name}
        />
      </figure>
      <p>{props.data.title}</p>
      <p>
        {props.data.stats.lowest_price
          ? props.data.stats.lowest_price + "$"
          : "-"}
      </p>
      <p>
        {props.data.stats.average_price
          ? props.data.stats.average_price + "$"
          : "-"}
      </p>
      <p>
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
      <span>name</span>
      <span>min price</span>
      <span>avg price</span>
      <span>max price</span>
      <span>popularity</span>
    </div>
  );
}

export default BookElement;
