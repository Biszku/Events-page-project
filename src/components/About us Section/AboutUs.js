import { ImCoinDollar, ImRocket, ImFileText2 } from "react-icons/im";

function AboutUs() {
  return (
    <section className="aboutus__section" id="aboutus__section">
      <div className="aboutus__section-container">
        <h2 className="aboutus__section-h2">About Us</h2>
        <div className="aboutus__section__card">
          <ImFileText2 className="aboutus__section__card-icon" />
          <p className="aboutus__section__card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore
            voluptates quidem magnam doloribus, obcaecati repudiandae iure cum
            quasi exercitationem praesentium reprehenderit officiis molestias
            ab? Fugit ab ipsam fugiat quibusdam?
          </p>
        </div>
        <div className="aboutus__section__card">
          <ImRocket className="aboutus__section__card-icon" />
          <p className="aboutus__section__card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore
            voluptates quidem magnam doloribus, obcaecati repudiandae iure cum
            quasi exercitationem praesentium reprehenderit officiis molestias
            ab? Fugit ab ipsam fugiat quibusdam?
          </p>
        </div>
        <div className="aboutus__section__card">
          <ImCoinDollar className="aboutus__section__card-icon" />
          <p className="aboutus__section__card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore
            voluptates quidem magnam doloribus, obcaecati repudiandae iure cum
            quasi exercitationem praesentium reprehenderit officiis molestias
            ab? Fugit ab ipsam fugiat quibusdam?
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
