import { useEffect, useState } from "react";
import { stats } from "../data/companies";
import CountUp from "react-countup";
import "./css/Stats.css";
import { FaStore } from "react-icons/fa";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const section = document.getElementById("stats");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="stats" className="stats">
      <div className="container">
        <div className="stats-grid">
          <div
            className={`stat-item ${isVisible ? "animate" : ""}`}
            data-aos="zoom-in">
            <div className="stat-icon">🏢</div>
            <div className="stat-number counter-pulse">
              {isVisible && (
                <CountUp
                  end={stats.companies}
                  duration={2.5}
                  separator=","
                  preserveValue
                />
              )}
            </div>
            <div className="stat-label">Active Companies</div>
          </div>

          <div
            className={`stat-item ${isVisible ? "animate" : ""}`}
            style={{ animationDelay: "0.1s" }}
            data-aos="zoom-in"
            data-aos-delay="50">
            <div className="stat-icon">👥</div>
            <div className="stat-number counter-pulse">
              {isVisible && (
                <>
                  <CountUp
                    end={stats.employees}
                    duration={2.8}
                    separator=","
                    preserveValue
                  />
                </>
              )}
            </div>
            <div className="stat-label">Team Members</div>
          </div>

          <div
            className={`stat-item ${isVisible ? "animate" : ""}`}
            style={{ animationDelay: "0.2s" }}
            data-aos="zoom-in"
            data-aos-delay="100">
            <div className="stat-icon">🌍</div>
            <div className="stat-number counter-pulse">
              {isVisible && (
                <CountUp end={stats.countries} duration={2.3} preserveValue />
              )}
            </div>
            <div className="stat-label">Countries</div>
          </div>

          <div
            className={`stat-item ${isVisible ? "animate" : ""}`}
            style={{ animationDelay: "0.3s" }}
            data-aos="zoom-in"
            data-aos-delay="150">
            <div className="stat-icon">⏱️</div>
            <div className="stat-number counter-pulse">
              {isVisible && (
                <CountUp end={stats.yearsActive} duration={2.2} preserveValue />
              )}
            </div>
            <div className="stat-label">Years Active</div>
          </div>

          <div
            className={`stat-item ${isVisible ? "animate" : ""}`}
            style={{ animationDelay: "0.4s" }}
            data-aos="zoom-in"
            data-aos-delay="200">
            <div className="stat-icon">🏬</div>
            <div className="stat-number counter-pulse">
              {isVisible && (
                <CountUp
                  end={150}
                  duration={2.6}
                  preserveValue
                  formatter={(value) => `$${value}`}
                />
              )}
            </div>
            <div className="stat-label">Retail branches</div>
          </div>
        </div>

        <div className="stats-footer" data-aos="fade-up" data-aos-delay="400">
          <p>
            Building successful businesses that create lasting impact across
            industries and continents
          </p>
        </div>
      </div>
    </section>
  );
}
