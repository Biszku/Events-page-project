import HeaderNav from "./Nav";
import HeaderText from "./HeaderText";
import MainVideo from "../../assets/video/coverr-toasting-with-champagne-4587-1080p.mp4";

function MainHeader(props) {
  return (
    <header className="header">
      <HeaderNav cart={props.cart} SetVisibilityOn={props.SetVisibilityOn} />
      <HeaderText />
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        alt="people holding a drinks and laughing"
        className="header-video"
      >
        <source src={MainVideo} type="video/mp4" />
      </video>
    </header>
  );
}

export default MainHeader;
