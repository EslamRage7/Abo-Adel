import { useState, useEffect } from "react";
import "./css/HeroSlider.css";
import heroImage1 from "../data/assets/test.png";
import heroImage2 from "../data/assets/test.png";
import heroImage3 from "../data/assets/test.png";

const heroSlides = [
  {
    id: 1,
    headline: "Innovate Your Future",
    description:
      "Transform your business with cutting-edge technology and strategic solutions designed for modern challenges.",
    buttonText: "Get Started",
    buttonLink: "#",
    image: heroImage1,
  },
  {
    id: 2,
    headline: "Build Your Success",
    description:
      "partner with industry leaders to create sustainable growth and unlock unlimited potential for your organization.",
    buttonText: "Learn More",
    buttonLink: "#",
    image: heroImage2,
  },
  {
    id: 3,
    headline: "Excel Together",
    description:
      "Join thousands of businesses transforming the way they operate with our comprehensive digital solutions.",
    buttonText: "Discover Now",
    buttonLink: "#",
    image: heroImage3,
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500); // 4.5 seconds

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    // Resume auto-play
    const resumeTimer = setTimeout(() => setIsAutoPlay(true), 2000);
    return () => clearTimeout(resumeTimer);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
    setIsAutoPlay(false);
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section className="hero-slider my-5">
      {/* Background Image Container */}
      <div className="hero-slider-background">
        <img
          src={currentSlide.image}
          alt={currentSlide.headline}
          className="hero-slider-image"
        />
        {/* Dark Overlay */}
        <div className="hero-slider-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="hero-slider-container">
        <div className="hero-slider-content">
          {/* Text Content */}
          <div className="hero-slider-text-wrapper">
            <div key={currentIndex} className="hero-slider-text fade-in">
              <h1 className="hero-slider-headline">{currentSlide.headline}</h1>
              <p className="hero-slider-description">
                {currentSlide.description}
              </p>
              <a href={currentSlide.buttonLink} className="hero-slider-button">
                {currentSlide.buttonText}
              </a>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hero-slider-nav-arrows">
            <button
              className="hero-slider-arrow hero-slider-arrow-prev"
              onClick={goToPrev}
              aria-label="Previous slide"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className="hero-slider-arrow hero-slider-arrow-next"
              onClick={goToNext}
              aria-label="Next slide"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="hero-slider-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-slider-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            >
              <span></span>
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="hero-slider-counter">
          <span className="counter-current">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="counter-separator">/</span>
          <span className="counter-total">
            {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
