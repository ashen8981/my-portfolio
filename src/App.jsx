import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './styles//splashScreen.css'; 
import ThreeDBackground from "./styles/threeDBackground";
import { initializeSentry } from './utils/sentry';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure you import the AOS CSS

const loadingTexts = ["Loading...", "Please Wait...", "Getting Ready..."];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
    AOS.refresh();

    // Initialize Sentry
    initializeSentry();

    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
    }, 1200); // Change text every 1.2 seconds

    setTimeout(() => {
      setLoading(false);
      clearInterval(textInterval);
    }, 2000); // Show splash screen for 2 seconds

    return () => clearInterval(textInterval);
  }, []);

  return (
    <>
      {loading ? (
        <div className="splash-screen">
          <div className="loading-text">{loadingTexts[textIndex]}</div>
          <div className="loading-bar"></div>
        </div>
      ) : (
        <>
          <ThreeDBackground /> {/* This will render the Three.js 3D background */}
          {/* Other sections */}
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
