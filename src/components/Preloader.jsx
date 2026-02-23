import { useState, useEffect } from "react";
import "./css/Preloader.css";
import logo from "../data/assets/HA Group.png";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after page loads
    const handleLoad = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    // If page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className={`preloader ${!isVisible ? "fade-out" : ""}`}>
      <div className="preloader-bg-orb orb-1"></div>
      <div className="preloader-bg-orb orb-2"></div>
      <div className="preloader-content">
        <div className="preloader-logo">
          <img className="img-fluid" src={logo} alt="logo" />
          <div className="logo-ring"></div>
        </div>
        <div className="preloader-text text-capitalize">
          humoud Abu adel groups
        </div>
        <div className="preloader-progress" aria-hidden="true">
          <span className="preloader-progress-bar"></span>
        </div>
        <p className="preloader-subtitle">Shaping the future, one moment...</p>
      </div>
    </div>
  );
}
