import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/HeroSlider.css";
import heroImage from "../data/assets/BOSS.jpeg";
import heroImageMobile from "../data/assets/small.jpeg";

export default function HeroSlider() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section
      className="hero-slider my-lg-5 my-md-5 my-sm-5 my-3 py-5"
      data-aos="fade-up">
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
