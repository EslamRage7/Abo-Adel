import { useParams, useNavigate } from "react-router-dom";
import { companies } from "../data/companies";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./css/CompanyDetail.css";
import Footer from "../components/Footer";
import CountUp from "react-countup";
import Seo from "../components/Seo";

export default function CompanyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companies.find((c) => c.id === parseInt(id));
  const companyUrlPath = `/company/${id}`;

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    window.scrollTo(0, 0);
  }, [id]);

  if (!company) {
    return (
      <>
        <Seo
          title="Company Not Found"
          description="The requested company page could not be found."
          noIndex
        />
        <div className="company-detail error-page">
          <div className="container py-5">
            <div className="error-content text-center">
              <h2>Company Not Found</h2>
              <p>The company you're looking for doesn't exist.</p>
              <button
                className="btn btn-primary mt-4"
                onClick={() => navigate("/")}>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  const companyStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.description,
    foundingDate: String(company.year),
    numberOfEmployees: company.employees,
    url: `${window.location.origin}${companyUrlPath}`,
    logo: company.logo,
    parentOrganization: {
      "@type": "Organization",
      name: "Humoud Abu Adel Groups",
      url: window.location.origin,
    },
  };

  return (
    <>
      <Seo
        title={`${company.name} - ${company.category}`}
        description={company.description}
        type="article"
        structuredData={companyStructuredData}
      />
      <div className="company-detail">
        <div className="company-detail-header mt-5 pt-5">
          <div className="container py-4 mt-5">
            <div data-aos="fade-right">
              <button
                className="btn btn-view mb-5"
                onClick={() => navigate("/")}>
                <FaArrowLeft /> Back to Companies
              </button>
            </div>
          </div>
        </div>

        {/* Hero section */}
        <section className="company-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="company-hero-logo text-center">
                  <img src={company.logo} alt={company.name} />
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <h1 className="company-hero-title">{company.name}</h1>
                <p className="company-hero-category">{company.category}</p>
                <p className="company-hero-description">
                  {company.description}
                </p>

                <div className="company-stats-grid">
                  <div
                    className="stat-box"
                    data-aos="zoom-in"
                    data-aos-delay="100">
                    <div className="stat-icon">📅</div>
                    <div className="stat-label">Founded</div>
                    <div className="stat-value">{company.year}</div>
                  </div>
                  <div
                    className="stat-box"
                    data-aos="zoom-in"
                    data-aos-delay="150">
                    <div className="stat-icon">👥</div>
                    <div className="stat-label">Employees</div>

                    <div className="stat-value">
                      <CountUp end={company.employees} duration={2} />+
                    </div>
                  </div>
                  <div
                    className="stat-box"
                    data-aos="zoom-in"
                    data-aos-delay="200">
                    <div className="stat-icon">🎯</div>
                    <div className="stat-label">Focus Area</div>
                    <div className="stat-value">{company.focus}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="company-about">
          <div className="container py-5">
            <div className="row" data-aos="fade-up">
              <div className="col-lg-8">
                <h2>About {company.name}</h2>
                <p className="about-text">
                  {company.name} is a leading company in the{" "}
                  {company.category.toLowerCase()} industry, established in{" "}
                  {company.year}. With a dedicated team of {company.employees}+
                  professionals, the company has remained committed to
                  delivering excellence and innovation in{" "}
                  {company.focus.toLowerCase()}.
                </p>
                <h3 className="mt-5 mb-4">Core Strengths</h3>
                <div className="strengths-list">
                  <div
                    className="strength-item"
                    data-aos="fade-up"
                    data-aos-delay="50">
                    <FaCheck className="strength-icon" />
                    <div>
                      <h5>Industry Leadership</h5>
                      <p>
                        Recognized as a pioneer in {company.focus.toLowerCase()}{" "}
                        with innovative solutions
                      </p>
                    </div>
                  </div>
                  <div
                    className="strength-item"
                    data-aos="fade-up"
                    data-aos-delay="100">
                    <FaCheck className="strength-icon" />
                    <div>
                      <h5>Expert Team</h5>
                      <p>
                        A diverse team of {company.employees}+ dedicated
                        professionals with deep industry expertise
                      </p>
                    </div>
                  </div>
                  <div
                    className="strength-item"
                    data-aos="fade-up"
                    data-aos-delay="150">
                    <FaCheck className="strength-icon" />
                    <div>
                      <h5>Proven Track Record</h5>
                      <p>
                        Years of success delivering exceptional results for
                        clients worldwide
                      </p>
                    </div>
                  </div>
                  <div
                    className="strength-item"
                    data-aos="fade-up"
                    data-aos-delay="200">
                    <FaCheck className="strength-icon" />
                    <div>
                      <h5>Continuous Innovation</h5>
                      <p>
                        Committed to staying ahead with cutting-edge technology
                        and methodologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-left">
                <div className="company-info-card">
                  <h3>Quick Facts</h3>
                  <div className="info-row">
                    <span className="info-label">Company Type</span>
                    <span className="info-value">{company.category}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Founded</span>
                    <span className="info-value">{company.year}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Team Size</span>
                    <span className="info-value">
                      {company.employees}+ Employees
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Focus</span>
                    <span className="info-value">{company.focus}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Status</span>
                    <span className="info-value status-active">
                      Active & Growing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* sectors section */}
        <section className="company-sectors text-center">
          <div className="container py-5">
            <h2 className="text-center mb-5" data-aos="fade-up">
              Our Sectors
            </h2>
            <div className="row">
              <div
                className="col-lg-3 col-md-4 col-sm-12 mb-4"
                data-aos="fade-up"
                data-aos-delay="50">
                <div className="sector-card">
                  <div className="sector-icon">🛍️</div>
                  <h5>Retail</h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 mb-4"
                data-aos="fade-up"
                data-aos-delay="100">
                <div className="sector-card">
                  <div className="sector-icon">🏭</div>
                  <h5> retail manufacturing electronics </h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 mb-4"
                data-aos="fade-up"
                data-aos-delay="150">
                <div className="sector-card">
                  <div className="sector-icon">💻</div>
                  <h5>Electronics</h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 mb-4"
                data-aos="fade-up"
                data-aos-delay="200">
                <div className="sector-card">
                  <div className="sector-icon">🏠</div>
                  <h5>Real Estate</h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 mb-4"
                data-aos="fade-up"
                data-aos-delay="250">
                <div className="sector-card">
                  <div className="sector-icon">🏨</div>
                  <h5>Hotels</h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 mb-4"
                data-aos="fade-up"
                data-aos-delay="300">
                <div className="sector-card">
                  <div className="sector-icon">🏖️</div>
                  <h5>Resorts & Chalets</h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 mb-4"
                data-aos="fade-up"
                data-aos-delay="350">
                <div className="sector-card">
                  <div className="sector-icon">🤖</div>
                  <h5>AI & Technology</h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 mb-4"
                data-aos="fade-up"
                data-aos-delay="400">
                <div className="sector-card">
                  <div className="sector-icon">🖥️</div>
                  <h5>Software</h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 mb-4"
                data-aos="fade-up"
                data-aos-delay="450">
                <div className="sector-card">
                  <div className="sector-icon">🏡</div>
                  <h5>Smart Home</h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 mb-4"
                data-aos="fade-up"
                data-aos-delay="500">
                <div className="sector-card">
                  <div className="sector-icon">🍽️</div>
                  <h5>Hospitality</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
