import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Contact";
import Aboutnext from "./Components/Aboutnext";
import Footer from "./Components/Footer";

function App() {

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
