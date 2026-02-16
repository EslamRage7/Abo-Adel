import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container py-5">
          <div className="row">
            {/* About */}
            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <h5 className="footer-title">Humoud AbuAdel Groups</h5>
              <p className="footer-text">
                Leading entrepreneur with a diverse portfolio of 10 successful
                companies making a global impact.
              </p>
            </div>

            {/* Quick Links */}
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li>
                  <Link to="/#hero">Home</Link>
                </li>
                <li>
                  <Link to="/#about">About</Link>
                </li>
                <li>
                  <Link to="/#companies">Companies</Link>
                </li>
                <li>
                  <Link to="/#contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Sectors */}
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200">
              <h5 className="footer-title">Sectors</h5>
              <ul className="footer-links text-capitalize">
                <li>
                  <a href="#">retail manufacturing electronics</a>
                </li>
                <li>
                  <a href="#">Real estate</a>
                </li>
                <li>
                  <a href="#">Hotels</a>
                </li>
                <li>
                  <a href="#">Resorts</a>
                </li>
                <li>
                  <a href="#">Hospitality</a>
                </li>
              </ul>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300">
              <h5 className="footer-title">More Sectors</h5>
              <ul className="footer-links footer-social">
                <li>
                  <a href="#">Chalets</a>
                </li>
                <li>
                  <a href="#">Ai & Technology</a>
                </li>
                <li>
                  <a href="#">Software</a>
                </li>
                <li>
                  <a href="#">Smart home</a>
                </li>
                <li>
                  <a href="#">Network</a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="footer-divider" />
        </div>
      </div>

      <div className="footer-background">
        <div className="footer-shape"></div>
      </div>
    </footer>
  );
}
