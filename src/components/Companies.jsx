import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { companies } from "../data/companies";
import "./css/Companies.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Companies() {
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleCardMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleCardMouseLeave = () => {
    setHoveredId(null);
  };

  const handleCardClick = (companyId) => {
    navigate(`/company/${companyId}`);
  };

  return (
    <section id="companies" className="companies">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title about-title" data-aos="fade-up">
            Portfolio of Companies
          </h2>
          <p
            className="section-subtitle about-subtitle"
            data-aos="fade-up"
            data-aos-delay="100">
            A diverse ecosystem of 10 successful businesses across multiple
            industries
          </p>
        </div>

        <div className="companies-grid">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="company-card"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              onMouseEnter={() => handleCardMouseEnter(company.id)}
              onMouseLeave={handleCardMouseLeave}
              onClick={() => handleCardClick(company.id)}>
              <div className="company-card-inner">
                <div className="company-card-front">
                  <div className="company-logo text-center">
                    <img src={company.logo} alt={company.name} />
                  </div>
                  <div className="company-content text-center">
                    <h3 className="company-name">{company.name}</h3>
                    <p className="company-category">{company.category}</p>
                    <p className="company-description text-truncate">
                      {company.description}
                    </p>
                  </div>
                </div>

                <div className="company-card-back">
                  <div className="company-stats">
                    <div className="stat">
                      <span className="stat-icon">📅</span>
                      <span className="stat-title">Founded</span>
                      <span className="stat-value">{company.year}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">👥</span>
                      <span className="stat-title">Team</span>
                      <span className="stat-value">{company.employees}+</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">🎯</span>
                      <span className="stat-title">Focus</span>
                      <span className="stat-value">{company.focus}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`company-hover ${hoveredId === company.id ? "show" : ""}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
