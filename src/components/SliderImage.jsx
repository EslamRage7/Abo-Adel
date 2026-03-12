import "./css/SliderImage.css";
import sliderImage from "../data/assets/test.png";

export default function SliderImage() {
  return (
    <section className="slider-image my-5" aria-label="Highlights slider image">
      <img
        src={sliderImage}
        alt="Group highlights"
        className="slider-image-media my-5"
        loading="lazy"
      />
    </section>
  );
}
