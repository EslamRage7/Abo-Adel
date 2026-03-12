import Hero from "../components/Hero";
import SliderImage from "../components/SliderImage";
import StoreCarousel from "../components/StoreCarousel";
import About from "../components/About";
import Companies from "../components/Companies";
import Partners from "../components/Partners";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

export default function Home() {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Homoud Abu Adel Groups",
    url: window.location.origin,
    logo: `${window.location.origin}/logo.png`,
    description:
      "Homoud Abu Adel Groups is a diversified business group operating across technology, retail, real estate, hospitality, and digital services.",
  };

  return (
    <>
      <Seo
        title="Home"
        description="Homoud Abu Adel Groups is a diversified business group building impact across technology, retail, real estate, hospitality, and digital services."
        structuredData={homeStructuredData}
      />
      <Hero />
      <SliderImage />
      <StoreCarousel />
      <About />
      <Companies />
      <Partners />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}
