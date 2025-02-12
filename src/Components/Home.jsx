import React, { useEffect, useRef } from "react";
import { FaRegLightbulb } from "react-icons/fa";

import "./animation.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Home = () => {
  const generatedocument = () => {
    const pdfUrl = "Dipendra Bhandari.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Dipendra Bhandari.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="w-full min-h-screen bg-neutral-100">
      <div className="container flex items-center justify-center h-screen px-4 mx-auto ">
        <div className="relative space-y-4 text-center">
          {/* Decorative background elements */}
          <div className="absolute -z-10 w-[500px] h-[500px]  " />

          {/* Main content */}
          <h1 className="text-5xl font-bold text-gray-900 animate-fadeInUp">
            HI<span className="text-orange-500">,</span>
          </h1>

          <div className="relative inline-block animate-fadeInUp delay-400">
  <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
    <img
      src="/one.png"
      alt=""
      className="absolute left-0 w-6 sm:w-8 md:w-9 lg:w-10 -top-4 sm:-top-5 animate-float"
    />
    I AM{" "}
    <span className="text-orange-500">
      <span className="italic">D</span>IPENDRA
    </span>
    <FaRegLightbulb className="absolute h-6 text-orange-500 sm:h-8 md:h-10 -top-3 sm:-top-7 -right-4 sm:-right-6 animate-glow" />
  </h1>
</div>


          <h1 className="text-5xl font-bold text-gray-900 md:text-7xl animate-fadeInUp delay-600">
            BHANDARI<span className="text-orange-500">.</span>
          </h1>

          <img
            src="curve-text-border-wave.png"
            alt="decorative curve"
            className="h-8 mx-auto mt-2 animate-fadeInUp"
          />

          <p className="text-2xl tracking-wider font-extralight animate-fadeInUp delay-800">
            WEB DEVELOPER
          </p>

          <button
            className="px-8 py-3 mt-8 text-lg text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 hover:scale-105 hover:shadow-xl hover:shadow-orange-200 active:scale-95"
            onClick={generatedocument}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
