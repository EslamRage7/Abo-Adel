import { useEffect, useState } from "react";
import "./css/Hero.css";
import heroVideo from "../data/assets/bg-video5.mp4";
import logo from "../data/assets/HA Group.png";

export default function Hero() {
  const phrases = [
    "Creating Value Across Diverse Sectors",
    "Building Impact Across Diverse Industries",
  ];

  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[index];

  useEffect(() => {
    let timeout;

    if (!isDeleting && chars < currentPhrase.length) {
      timeout = setTimeout(() => setChars((prev) => prev + 1), 45);
    } else if (!isDeleting && chars === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && chars > 0) {
      timeout = setTimeout(() => setChars((prev) => prev - 1), 25);
    } else if (isDeleting && chars === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [chars, isDeleting, currentPhrase]);

  return (
    <section id="hero" className="hero mb-5">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"></video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <img src={logo} className="hero-logo" alt="HA Group logo" />
        <div className="hero-text text-center">
          <h1 className="hero-title">Homoud</h1>
          <h1 className="hero-title">Abu Adel Groups</h1>

          <h3 className="hero-subtitle gradient-text d-flex align-items-center justify-content-center">
            {currentPhrase.slice(0, chars)}
          </h3>
        </div>
      </div>
    </section>
  );
}
