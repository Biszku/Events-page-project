import { Link } from "react-scroll";
import { ImCart } from "react-icons/im";

function HeaderNav() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-list-item">
          <Link
            to="aboutus__section"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About us
          </Link>
        </li>
        <li className="header__nav-list-item">
          <Link
            to="Offert__container"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Offert
          </Link>
        </li>
        <li className="header__nav-list-item">
          <Link
            to="Gallery__section"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Gallery
          </Link>
        </li>
        <li className="header__nav-list-item">
          <Link
            className="primary-button"
            to="Book__section"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Book event
          </Link>
        </li>

        <ImCart className="header__nav-list-item" />
        <span>1</span>
      </ul>
    </nav>
  );
}

export default HeaderNav;
