import HeaderNav from "./Nav";
import HeaderText from "./HeaderText";
import MainVideo from "../../assets/video/coverr-toasting-with-champagne-4587-original.mp4";

function MainHeader() {
  return (
    <header className="header">
      <HeaderNav />
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
