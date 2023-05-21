import { Link } from "react-scroll";

function HeaderText() {
  return (
    <div className="header__text">
      <h1>Great events for everyone</h1>
      <span className="header__text-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        impedit possimus pariatur quisquam animi quo quasi consectetur quis
        nesciunt ipsa modi cum, voluptatem dolore cupiditate tempore ducimus
        natus distinctio expedita!
      </span>
      <Link
        to="aboutus__section"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        Learn more &rarr;
      </Link>
    </div>
  );
}

export default HeaderText;
