import { partners } from "../data/companies";
import "./css/Partners.css";

export default function Partners() {
  const loopedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="partners-section">
      <div className="container py-5">
        <div className="text-center my-5 pt-4 pb-1">
          <h2 className="about-title">Our Partners</h2>
          <p className="partners-subtitle about-subtitle">
            Trusted collaborations across telecom, logistics, and commerce
          </p>
        </div>

        <div className="partners-carousel" aria-label="Partners carousel">
          <div className="partners-track">
            {loopedPartners.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="partner-slide">
                <div className="partner-item text-center">
                  <img
                    className="partner-logo"
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                  />
                  <p className="partner-name text-muted text-capitalize">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
