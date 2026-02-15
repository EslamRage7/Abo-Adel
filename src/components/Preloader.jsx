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
      <div className="preloader-content">
        <div className="preloader-logo">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>
        <div className="preloader-text text-capitalize">
          humoud Abu adel groups
        </div>
        <div className="preloader-spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>
        <p className="preloader-subtitle">Shaping the future, one moment...</p>
      </div>
    </div>
  );
}
