import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import img6 from "../../assets/img/img6.jpg";
import img7 from "../../assets/img/img7.jpg";

function Gallery() {
  return (
    <section className="Gallery__section">
      <div className="Gallery__section-img">
        <img src={img1} />
      </div>
      <div className="Gallery__section-img">
        <img src={img2} />
      </div>
      <div className="Gallery__section-img">
        <img src={img3} />
      </div>
      <div className="Gallery__section-img">
        <img src={img4} />
      </div>
      <div className="Gallery__section-img">
        <img src={img5} />
      </div>
      <div className="Gallery__section-img">
        <img src={img6} />
      </div>
      <div className="Gallery__section-img">
        <img src={img7} />
      </div>
    </section>
  );
}

export default Gallery;
