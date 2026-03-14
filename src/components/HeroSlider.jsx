import "./css/HeroSlider.css";
import heroImage from "../data/assets/BOSS.jpeg";
import heroImageMobile from "../data/assets/small.jpeg";

export default function HeroSlider() {
  return (
    <section className="hero-slider my-5">
      <div className="hero-slider-background">
        <picture>
          {/* Mobile Image */}
          <source media="(max-width: 675px)" srcSet={heroImageMobile} />

          {/* Default Desktop Image */}
          <img src={heroImage} alt="Hero" className="hero-slider-image" />
        </picture>
      </div>
    </section>
  );
}
