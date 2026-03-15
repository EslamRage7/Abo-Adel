import { useState } from "react";
import "./css/SliderImage.css";
import images from "../data/assets/test.png";

const ceoData = [
  {
    id: 1,
    name: "Ahmed Adel",
    title: "CEO",
    image: images,
    desc: "Leading the company with innovation and strategic vision.",
  },
  {
    id: 2,
    name: "Ahmed Adel",
    title: "CEO",
    image: images,
    desc: "Driving growth and building strong partnerships.",
  },
  {
    id: 3,
    name: "Ahmed Adel",
    title: "CEO",
    image: images,
    desc: "Focused on delivering excellence and success.",
  },
];

export default function SliderImage() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % ceoData.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + ceoData.length) % ceoData.length);
  };

  return (
    <div id="ceoCarousel" className="carousel slide">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {ceoData.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#ceoCarousel"
            data-bs-slide-to={i}
            className={i === index ? "active" : ""}
            aria-current={i === index ? "true" : "false"}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {ceoData.map((ceo, i) => (
          <div
            key={ceo.id}
            className={`carousel-item ${i === index ? "active" : ""}`}
          >
            <img src={ceo.image} className="d-block w-100" alt={ceo.name} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{ceo.name}</h5>
              <p className="ceo-title">{ceo.title}</p>
              <p>{ceo.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#ceoCarousel"
        data-bs-slide="prev"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#ceoCarousel"
        data-bs-slide="next"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
