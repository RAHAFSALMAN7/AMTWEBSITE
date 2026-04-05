import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import WhyChooseUs from "../components/WhyChooseUs";
import PartnersSection from "../components/PartnersSection";
import ClientsSection from "../components/ClientsSection";
import LatestNews from "../components/LatestNews";
import SeoTopicsSection from "../components/SeoTopicsSection";
import HomeFaqSection from "../components/HomeFaqSection";

/**
 * Home route bundles all primary sections for lazy-loading with the page.
 */
const HomePage = () => (
  <>
    <Hero />
    <Solutions />
    <WhyChooseUs />
    <PartnersSection />
    <ClientsSection />
    <LatestNews />
    <SeoTopicsSection />
    <HomeFaqSection />
  </>
);

export default HomePage;
