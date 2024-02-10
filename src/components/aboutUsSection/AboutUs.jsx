import { ImCoinDollar, ImRocket, ImFileText2 } from "react-icons/im";

function AboutUs() {
  return (
    <section className="aboutus__section" id="aboutus__section">
      <div className="aboutus__section-container">
        <h2 className="aboutus__section-h2">About Us</h2>
        <div className="aboutus__section__card">
          <ImFileText2 className="aboutus__section__card-icon" />
          <p className="aboutus__section__card-text">
            We are a company selling tickets for various events for 2 years,
            during this time we have gained 100,000 satisfied customers and
            1,000 cooperations with event organizers
          </p>
        </div>
        <div className="aboutus__section__card">
          <ImRocket className="aboutus__section__card-icon" />
          <p className="aboutus__section__card-text">
            We offer very fast availability of tickets and the possibility of
            buying them even during the event. The delivery of tickets is also
            very fast because you can expect it from 1-2 days in the physical
            version, or after buying by e-mail in the electronic version.
          </p>
        </div>
        <div className="aboutus__section__card">
          <ImCoinDollar className="aboutus__section__card-icon" />
          <p className="aboutus__section__card-text">
            Thanks to cooperation with event organizers, we have access to the
            best ticket offers on the market.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
