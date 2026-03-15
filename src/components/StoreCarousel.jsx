import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { slide } from "../data/companies";
import "./css/StoreCarousel.css";

export default function StoreCarousel() {
  const slides = useMemo(
    () =>
      slide.map((slide) => ({
        id: slide.id,
        name: slide.name,
        image: slide.path,
      })),
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goTo = (index) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section
      className="store-carousel pt-5"
      aria-label="Store gallery"
      data-aos="fade-up">
      <div className="container-fluid">
        <div className="text-center mb-4">
          <h2 className="section-title about-title" data-aos="fade-up">
            Our Business
          </h2>
        </div>

        <div
          className="store-carousel-frame"
          data-aos="zoom-in"
          data-aos-delay="100">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`store-slide ${index === activeIndex ? "is-active" : ""}`}
              aria-hidden={index !== activeIndex}>
              <div className="store-slide-media">
                <img src={slide.image} alt={slide.name} />

                <div className="store-slide-overlay">
                  <div className="store-slide-meta text-capitalize">
                    <h3>{slide.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="store-carousel-btn prev"
            aria-label="Previous slide"
            onClick={() => goTo(activeIndex - 1)}>
            ❮
          </button>
          <button
            type="button"
            className="store-carousel-btn next"
            aria-label="Next slide"
            onClick={() => goTo(activeIndex + 1)}>
            ❯
          </button>
        </div>
        {/* <div
          className="store-carousel-dots"
          role="tablist"
          data-aos="fade-up"
          data-aos-delay="150">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`store-dot ${index === activeIndex ? "is-active" : ""}`}
              aria-label={`Go to ${slide.name}`}
              aria-pressed={index === activeIndex}
              onClick={() => goTo(index)}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
