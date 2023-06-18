import { Link } from "react-scroll";
import { ImCart, ImMenu } from "react-icons/im";

function HeaderNav(props) {
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
        <li className="header__nav-list-item">
          <ImCart onClick={props.SetVisibilityOn} />
          {props.cart.length !== 0 && (
            <span onClick={props.SetVisibilityOn}>
              {props.cart.reduce((sum, cur) => sum + Number(cur.amount), 0)}
            </span>
          )}
        </li>
      </ul>
      <ImMenu className="header__nav-mobile" />
    </nav>
  );
}

export default HeaderNav;
