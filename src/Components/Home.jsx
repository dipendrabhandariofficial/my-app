import React, { useEffect, useRef } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import LocomotiveScroll from "locomotive-scroll";
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
    <div id="home" className=" min-h-screen w-full  bg-neutral-100">
      <div className="container mx-auto px-4 h-screen flex items-center justify-center ">
        <div className="space-y-4 text-center relative">
          {/* Decorative background elements */}
          <div className="absolute -z-10 w-[500px] h-[500px]  " />

          {/* Main content */}
          <h1 className="text-5xl font-bold animate-fadeInUp  text-gray-900">
            HI<span className="text-orange-500">,</span>
          </h1>

          <div className="relative inline-block animate-fadeInUp delay-400">
            <h1 className="text-5xl md:text-7xl font-bold  text-gray-900">
              <img
                src="/one.png"
                alt=""
                className="absolute w-9 -top-5 left-0 animate-float"
              />
              I AM{"  "}
              <span className="text-orange-500">
                <span className="italic">D</span>IPENDRA
              </span>
              <FaRegLightbulb className="absolute -top-4 -right-6 h-10 w-auto animate-glow text-orange-500" />
            </h1>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold animate-fadeInUp delay-600  text-gray-900">
            BHANDARI<span className="text-orange-500">.</span>
          </h1>

          <img
            src="curve-text-border-wave.png"
            alt="decorative curve"
            className="h-8 mx-auto mt-2 animate-fadeInUp"
          />

          <p className="text-2xl font-extralight tracking-wider animate-fadeInUp delay-800">
            WEB DEVELOPER
          </p>

          <button
            className="mt-8 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-400 
                             text-white text-lg rounded-lg transform transition-all duration-300
                             hover:scale-105 hover:shadow-xl hover:shadow-orange-200
                             active:scale-95"
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
