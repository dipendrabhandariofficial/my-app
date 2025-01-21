import React from "react";
import{ useEffect,useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Contact";
import Aboutnext from "./Components/Aboutnext";
import Footer from "./Components/Footer";
import Lenis from "@studio-freight/lenis";


function App() {
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

  return (
    <>
      <div className="h-full max-w-screen overflow-x-hidden  ">
        <Navbar/>
        <Home />
        <Aboutnext />
        <Projects />
        {/* <Skills/> */}
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
