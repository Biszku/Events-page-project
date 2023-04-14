import { ImCtrl } from "react-icons/im";

function Offert() {
  return (
    <section className="Offert__container">
      <div className="Offert__item">
        <div className="Offert__item-images Offert__item-images-1"></div>
        <h3 className="Offert__item-h3">Food Festival</h3>
        <ul className="Offert__item__list">
          <li className="Offert__item__list-item">
            <ImCtrl className="Offert-emojis" />
            Taste of Chicago
          </li>
          <li className="Offert__item__list-item">
            <ImCtrl className="Offert-emojis" />
            Tokyo Ramen Show
          </li>
          <li className="Offert__item__list-item">
            <ImCtrl className="Offert-emojis" />
            Food Truck Festival
          </li>
        </ul>

        <button className="primary-button Offert__item-button">
          Buy for 399.99$
        </button>
      </div>
      <div className="Offert__item">
        <div className="Offert__item-images Offert__item-images-2"></div>
        <h3 className="Offert__item-h3">Music Festival</h3>
        <ul className="Offert__item__list">
          <li className="Offert__item__list-item">
            <ImCtrl className="Offert-emojis" />
            Clout Festival
          </li>
          <li className="Offert__item__list-item">
            <ImCtrl className="Offert-emojis" />
            Glastonbury Festival
          </li>
          <li className="Offert__item__list-item">
            <ImCtrl className="Offert-emojis" />
            Tomorrowland
          </li>
        </ul>

        <button className="primary-button Offert__item-button">
          Buy for 499.99$
        </button>
      </div>
      <div className="Offert__item">
        <div className="Offert__item-images Offert__item-images-3"></div>
        <h3 className="Offert__item-h3">Integration Events</h3>
        <ul className="Offert__item__list">
          <li className="Offert__item__list-item">
            <ImCtrl className="Offert-emojis" />
            Color Run
          </li>
          <li className="Offert__item__list-item">
            <ImCtrl className="Offert-emojis" />
            Escape Room
          </li>
          <li className="Offert__item__list-item">
            <ImCtrl className="Offert-emojis" />
            Amazing Race
          </li>
        </ul>

        <button className="primary-button Offert__item-button">
          Buy for 599.99$
        </button>
      </div>
    </section>
  );
}

export default Offert;
