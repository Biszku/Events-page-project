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
      <figure className="Gallery__section-imgField field-1">
        <img
          className="Gallery__section__img"
          src={img1}
          alt="people around colors"
        />
      </figure>
      <figure className="Gallery__section-imgField field-2">
        <img
          className="Gallery__section__img"
          src={img2}
          alt="man under the water"
        />
      </figure>
      <figure className="Gallery__section-imgField field-3">
        <img
          className="Gallery__section__img"
          src={img3}
          alt="people drinking something"
        />
      </figure>
      <figure className="Gallery__section-imgField field-4">
        <img className="Gallery__section__img" src={img4} alt="dj panel" />
      </figure>
      <figure className="Gallery__section-imgField field-5">
        <img
          className="Gallery__section__img"
          src={img5}
          alt="party stage and confetti"
        />
      </figure>
      <figure className="Gallery__section-imgField field-6">
        <img
          className="Gallery__section__img"
          src={img6}
          alt="party stage and party"
        />
      </figure>
      <figure className="Gallery__section-imgField field-7">
        <img className="Gallery__section__img" src={img7} alt="party" />
      </figure>
    </section>
  );
}

export default Gallery;
