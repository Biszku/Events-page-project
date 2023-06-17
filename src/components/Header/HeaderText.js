import { Link } from "react-scroll";

function HeaderText() {
  return (
    <div className="header__text">
      <h1>Great events for everyone</h1>
      <span className="header__text-p">
        If you are looking for tickets for various events at the best available
        price, you've come to the right place. Click below to find out more!
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
