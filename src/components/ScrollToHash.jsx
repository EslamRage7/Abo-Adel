import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const elementId = hash.slice(1);
    let attempts = 0;

    const scrollToSection = () => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      attempts += 1;
      if (attempts < 10) {
        setTimeout(scrollToSection, 100);
      }
    };

    scrollToSection();
  }, [hash, pathname]);

  return null;
}
