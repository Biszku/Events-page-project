import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import img6 from "../../assets/img/img6.jpg";
import img7 from "../../assets/img/img7.jpg";

import img1web from "../../assets/img/img1.webp";
import img2web from "../../assets/img/img2.webp";
import img3web from "../../assets/img/img3.webp";
import img4web from "../../assets/img/img4.webp";
import img5web from "../../assets/img/img5.webp";
import img6web from "../../assets/img/img6.webp";
import img7web from "../../assets/img/img7.webp";

function Gallery() {
  return (
    <section className="Gallery__section">
      <figure className="Gallery__section-imgField field-1">
        <picture>
          <source srcSet={img1web} type="image/webp" />
          <source srcSet={img1} type="image/jpeg" />
          <img
            className="Gallery__section__img"
            src={img1}
            alt="people around colors"
          />
        </picture>
      </figure>
      <figure className="Gallery__section-imgField field-2">
        <picture>
          <source srcSet={img2web} type="image/webp" />
          <source srcSet={img2} type="image/jpeg" />
          <img
            className="Gallery__section__img"
            src={img2}
            alt="man under the water"
          />
        </picture>
      </figure>
      <figure className="Gallery__section-imgField field-3">
        <picture>
          <source srcSet={img3web} type="image/webp" />
          <source srcSet={img3} type="image/jpeg" />
          <img
            className="Gallery__section__img"
            src={img3}
            alt="people drinking something"
          />
        </picture>
      </figure>
      <figure className="Gallery__section-imgField field-4">
        <picture>
          <source srcSet={img4web} type="image/webp" />
          <source srcSet={img4} type="image/jpeg" />
          <img className="Gallery__section__img" src={img4} alt="dj panel" />
        </picture>
      </figure>
      <figure className="Gallery__section-imgField field-5">
        <picture>
          <source srcSet={img5web} type="image/webp" />
          <source srcSet={img5} type="image/jpeg" />
          <img
            className="Gallery__section__img"
            src={img5}
            alt="party stage and confetti"
          />
        </picture>
      </figure>
      <figure className="Gallery__section-imgField field-6">
        <picture>
          <source srcSet={img6web} type="image/webp" />
          <source srcSet={img6} type="image/jpeg" />
          <img
            className="Gallery__section__img"
            src={img6}
            alt="party stage and party"
          />
        </picture>
      </figure>
      <figure className="Gallery__section-imgField field-7">
        <picture>
          <source srcSet={img7web} type="image/webp" />
          <source srcSet={img7} type="image/jpeg" />
          <img className="Gallery__section__img" src={img7} alt="party" />
        </picture>
      </figure>
    </section>
  );
}

export default Gallery;
