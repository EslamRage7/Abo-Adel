import "./css/Hero.css";
import heroVideo from "../data/assets/bg-video5.mp4";
import logo from "../data/assets/HA Group.png";

export default function Hero() {
  return (
    <section id="hero" className="hero">
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
          <h1 className="hero-title">Humoud AbuAdel Groups</h1>
          <h2 className="hero-subtitle gradient-text">
            Building Impact Across Diverse Industries
          </h2>
        </div>
      </div>
    </section>
  );
}
