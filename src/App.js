import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import { useRef } from "react";

function App() {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleScrollToServices = () => {
    scrollToSection(servicesRef);
  };

  return (
    <Router>
      <div className="App">
        <Header
          scrollToSection={scrollToSection}
          servicesRef={servicesRef}
          aboutRef={aboutRef}
        />
        <Hero />
        <Services ref={servicesRef} id="services" />
        <Testimonial />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
