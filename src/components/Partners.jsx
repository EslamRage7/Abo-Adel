import { useState } from "react";
import { partners } from "../data/companies";
import "./css/Partners.css";

export default function Partners() {
  const [failedLogos, setFailedLogos] = useState({});

  const handleLogoError = (partnerName) => {
    setFailedLogos((prev) => ({ ...prev, [partnerName]: true }));
  };

  return (
    <section id="partners" className="partners-section">
      <div className="container py-5">
        <div className="text-center my-5 pt-4 pb-1">
          <h2 className="about-title">Our Partners</h2>
          <p className="partners-subtitle about-subtitle mb-5">
            Trusted collaborations across telecom, logistics, and commerce
          </p>
        </div>

        <div className="row g-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="col-lg-4 col-md-6 col-sm-6 col-12 m-auto">
              <div className="partner-item text-center p-4 mb-4">
                {!failedLogos[partner.name] && (
                  <img
                    className="partner-logo"
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    onError={() => handleLogoError(partner.name)}
                  />
                )}
                <p className="partner-name mt-3 fw-semibold text-muted">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
