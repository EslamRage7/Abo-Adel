import "./css/Hero.css";
import heroVideo from "../data/assets/bg-video5.mp4";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline></video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="text-center">
          <h1 className="hero-title">
            Building Impact Across
            <span className="gradient-text"> Diverse Industries</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
