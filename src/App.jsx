import Footer from "./components/layout/Footer.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import PopupForm from "./components/PopUpForm.jsx";
import AboutSection from "./components/section/AboutSection.jsx";
import AmenitiesSecction from "./components/section/AmenitiesSecction.jsx";
import ContactSection from "./components/section/ContactSection.jsx";
import FloorPlansSection from "./components/section/FloorPlansSection.jsx";
import GallerySection from "./components/section/GallerySection.jsx";
import HeroSection from "./components/section/HeroSection";
import LocationSection from "./components/section/LocationSection.jsx";

const App = () => {
  return (
    <>
      <PopupForm />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <AmenitiesSecction />
      <FloorPlansSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
