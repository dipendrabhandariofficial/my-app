import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen overflow-x-hidden relative">
        <Navbar/>
        <Home />
        <About />
        <Skills/>
        <Projects />
        <Contact/>
      </div>
    </>
  );
}

export default App;
