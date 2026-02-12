import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/About.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container-fluid py-5">
        <div className="about-hero" data-aos="zoom-in">
          <div className="about-hero-content">
            <div className="row align-items-center text-center ">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="about-images-grid">
                  <div className="about-image main-image" data-aos="zoom-in">
                    <div className="about-card primary">🏢</div>
                  </div>
                  <div
                    className="about-image secondary-1"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className="about-card">💼</div>
                  </div>
                  <div
                    className="about-image secondary-2"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div className="about-card">🚀</div>
                  </div>
                  <div
                    className="about-image secondary-3"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="about-card">🏆</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8" data-aos="fade-left">
                <div className="about-info">
                  <h2 className="section-title about-title">
                    Humoud Aboudel Group
                  </h2>
                  <p className="about-subtitle">
                    Visionary Entrepreneur & Business Magnate
                  </p>

                  <p className="about-text">
                    Humoud Aboudel Group is a diversified business group
                    operating across retail, manufacturing, technology,
                    hospitality, and real estate.
                  </p>
                  <p className="about-text">
                    The group manages multiple companies that serve customers
                    through mobile retail, accessory production, software
                    solutions, premium resorts, and property development.
                  </p>

                  <div className="about-features">
                    <div
                      className="feature"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="feature-icon">🎯</div>
                      <div>
                        <h5>Strategic Vision</h5>
                        <p>
                          Identifying market opportunities and building
                          sustainable businesses
                        </p>
                      </div>
                    </div>
                    <div
                      className="feature"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="feature-icon">💡</div>
                      <div>
                        <h5>Innovation Leader</h5>
                        <p>
                          Driving technological advancement and industry
                          transformation
                        </p>
                      </div>
                    </div>
                    <div
                      className="feature"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="feature-icon">🤝</div>
                      <div>
                        <h5>Community Builder</h5>
                        <p>
                          Creating employment and fostering economic development
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="about-achievements"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="achievement-item">
                      <div className="achievement-number">10+</div>
                      <div className="achievement-label">
                        Successful Companies
                      </div>
                    </div>
                    <div className="achievement-item">
                      <div className="achievement-number">1K+</div>
                      <div className="achievement-label">Team Members</div>
                    </div>
                    <div className="achievement-item">
                      <div className="achievement-number">15+</div>
                      <div className="achievement-label">Global Markets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
