import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Contact";
import Aboutnext from "./Components/Aboutnext";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen overflow-x-hidden ">
        <Navbar/>
        <Home />
        <Aboutnext />
        <Skills/>
        <Projects />
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
