import FeaturesCarousel from "../components/Carousal/Carousal";
import ClientsSection from "../components/ClientSection/ClientSection";
import ConsultationSection from "../components/Consutation/Consultation";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/HeroSection";
import ProjectsSection from "../components/ProjectSection/ProjectSection";


export default function Landing() {
  return (
  <>
  <Header />
  <Hero />
  <ProjectsSection />
  <ClientsSection />
  <ConsultationSection />
  <FeaturesCarousel />
  <Footer />
  </>
  )
}
