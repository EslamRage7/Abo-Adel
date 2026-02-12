import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/Header.css";
import logo from "../data/assets/HA Group.png";

export default function CompanyHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: Track which section is in view
  useEffect(() => {
    const sections = ["hero", "about", "companies", "stats", "contact"].map(
      (id) => document.getElementById(id),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.3, 0.5],
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    // Using a timeout to defer setState call
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (sectionId) => {
    setIsOpen(false); // Close the menu

    // If on company detail page, navigate to home first
    if (location.pathname.startsWith("/company/")) {
      navigate("/");
      // Scroll to section after a brief delay to allow routing
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // Already on home page, just scroll
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavLinkHover = (e) => {
    // Only apply hover effect on desktop (992px and up)
    if (window.innerWidth >= 992) {
      const link = e.currentTarget;
      const underline = document.createElement("span");
      underline.className = "nav-underline";
      link.appendChild(underline);
      setTimeout(() => underline.remove(), 600);
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <header className="header">
      <nav
        className={`navbar navbar-expand-lg sticky-top ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="container-fluid">
          <div
            className="navbar-brand fw-bold brand-link"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
            <img className="img-fluid brand-icon" src={logo} alt="logo" />
            <span>humoud Abu adel groups</span>
          </div>

          <button
            className={`navbar-toggler custom-toggler ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="hamburger">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </span>
          </button>

          <div
            className={`navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === "hero" ? "active" : ""}`}
                  onClick={() => handleNavClick("hero")}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={handleNavLinkHover}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                  onClick={() => handleNavClick("about")}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={handleNavLinkHover}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === "companies" ? "active" : ""}`}
                  onClick={() => handleNavClick("companies")}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={handleNavLinkHover}
                >
                  Companies
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === "stats" ? "active" : ""}`}
                  onClick={() => handleNavClick("stats")}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={handleNavLinkHover}
                >
                  Impact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                  onClick={() => handleNavClick("contact")}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={handleNavLinkHover}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
