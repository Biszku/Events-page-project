import { Link } from "react-scroll";
import { useState } from "react";
import { ImCart, ImMenu } from "react-icons/im";
import { useDispatch } from "react-redux";
import { setVisibility } from "../../features/visibility/cartVisibility";
function HeaderNav(props) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <nav className={`header__nav ${visible ? `header__nav-visible` : ``} `}>
        <ul className="header__nav-list">
          <li className="header__nav-list-item">
            <Link
              to="aboutus__section"
              spy={true}
              onClick={() => setVisible(false)}
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
              onClick={() => setVisible(false)}
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
              onClick={() => setVisible(false)}
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
              onClick={() => setVisible(false)}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Book event
            </Link>
          </li>
          <li className="header__nav-list-item">
            <ImCart
              onClick={() => {
                setVisible(false);
                dispatch(setVisibility(true));
              }}
            />
            {props.cart.length !== 0 && (
              <span
                onClick={() => {
                  setVisible(false);
                  props.SetVisibilityOn();
                }}
              >
                {props.cart.reduce((sum, cur) => sum + Number(cur.amount), 0)}
              </span>
            )}
          </li>
        </ul>
      </nav>
      <ImMenu
        className="header__nav-mobile"
        onClick={() => setVisible((prevState) => !prevState)}
      />
    </>
  );
}

export default HeaderNav;
