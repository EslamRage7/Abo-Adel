import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/About.css";
import collageOne from "../data/assets/one.jpg";
import collageTwo from "../data/assets/two.jpeg";
import collageThree from "../data/assets/three.jpg";
import collageFour from "../data/assets/four.jpg";
import { FaStore, FaCogs, FaLaptopCode, FaHotel } from "react-icons/fa";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="about-surface" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about-copy">
                <p className="about-eyebrow">Homoud Abu Adel Groups</p>
                <h2 className="about-headline">
                  Building <span>Businesses</span>,<br />
                  Creating <span>Value</span>,<br />
                  Inspiring <em>Growth</em>.
                </h2>
                <p className="about-lead">
                  A diversified business group shaping the future in retail,
                  manufacturing, technology, hospitality, and real estate.
                </p>
                <div className="about-cta">
                  <button className="about-btn primary" type="button">
                    Discover Our Businesses
                  </button>
                  <button className="about-btn ghost" type="button">
                    Watch Our Story
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about-collage">
                <div className="collage-card tall">
                  <img src={collageOne} alt="Retail experience" />
                </div>
                <div className="collage-card">
                  <img src={collageTwo} alt="Technology innovation" />
                </div>
                <div className="collage-card tall">
                  <img src={collageThree} alt="Hospitality destination" />
                </div>
                <div className="collage-card">
                  <img src={collageFour} alt="Real estate development" />
                </div>
              </div>
            </div>
          </div>

          <div className="about-bottom" data-aos="fade-up">
            <div className="about-pill pill-retail">
              <span className="pill-icon">
                <FaStore />
              </span>
              <h4>Retail</h4>
              <p>& Mobile</p>
            </div>
            <div className="about-pill pill-manufacturing">
              <span className="pill-icon">
                <FaCogs />
              </span>
              <h4>Manufacturing</h4>
              <p>& Accessories</p>
            </div>
            <div className="about-pill pill-technology">
              <span className="pill-icon">
                <FaLaptopCode />
              </span>
              <h4>Technology</h4>
              <p>& Software</p>
            </div>
            <div className="about-pill pill-hospitality">
              <span className="pill-icon">
                <FaHotel />
              </span>
              <h4>Hospitality</h4>
              <p>& Real Estate</p>
            </div>
            <div className="about-impact">
              <div className="impact-header">Our Impact</div>
              <div className="impact-grid">
                <div>
                  <h3>6</h3>
                  <p>Companies</p>
                </div>
                <div>
                  <h3>10</h3>
                  <p>Years of Excellence</p>
                </div>
                <div>
                  <h3>1,500+</h3>
                  <p>Employees</p>
                </div>
                <div>
                  <h3>Multiple</h3>
                  <p>Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
