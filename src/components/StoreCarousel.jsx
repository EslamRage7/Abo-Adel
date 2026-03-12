import { useEffect, useMemo, useState } from "react";
import { slide } from "../data/companies";
import "./css/StoreCarousel.css";
import bg from "../data/assets/bg.jpeg";

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
    <section className="store-carousel my-5" aria-label="Store gallery">
      <div className="container-fluid py-5">
        <div className="text-center mb-4">
          <h2 className="section-title about-title">Store Gallery</h2>
          <p style={{ color: "#0b2545" }} className="">
            Slideshow of all companies in the group
          </p>
        </div>

        <div className="store-carousel-frame">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`store-slide ${index === activeIndex ? "is-active" : ""}`}
              aria-hidden={index !== activeIndex}
            >
              <div className="store-slide-media">
                <img src={slide.image} alt={slide.name} />

                <div className="store-slide-overlay">
                  <div className="store-slide-meta">
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
            onClick={() => goTo(activeIndex - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="store-carousel-btn next"
            aria-label="Next slide"
            onClick={() => goTo(activeIndex + 1)}
          >
            ›
          </button>
        </div>

        <div className="store-carousel-dots" role="tablist">
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
        </div>
      </div>
    </section>
  );
}
