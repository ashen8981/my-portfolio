import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './splashScreen.css'; 

const loadingTexts = ["Loading...", "Please Wait...", "Getting Ready..."];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
    }, 1200); // Change text every 1.2 seconds

    setTimeout(() => {
      setLoading(false);
      clearInterval(textInterval);
    }, 3000); // Show splash screen for 3 seconds

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
