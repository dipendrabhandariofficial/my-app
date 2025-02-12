import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Contact";
import Aboutnext from "./Components/Aboutnext";
import Footer from "./Components/Footer";
import Lenis from "@studio-freight/lenis";
import Preloader from "./Components/Preloader";


function App() {
  const [loading, setLoading] = useState(true); // State for preloader

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", handleScroll);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup to avoid memory leaks
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    console.log(e, "Scroll event triggered");
  };

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop showing preloader after 2 seconds (or any duration)
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      <div className="w-screen h-full overflow-x-hidden max-w-screen">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />
            <Home />
            <Aboutnext />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
