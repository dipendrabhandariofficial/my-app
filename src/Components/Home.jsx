import React from "react";
import "./Home.css";
import { FaRegLightbulb } from "react-icons/fa";

function Home() {
  return (
    <div className="">
      <div className="h-screen w-screen overflow-x-hidden flex flex-col md:flex">
        <div
          name="home"
          className="flex flex-col items-center justify-center grow z-1 "
        >
          <h1 className="text-5xl  font-bold text-black text-center animate-fadeInUp">
            <span>HI</span><span className="text-orange-500">,</span>
          </h1>
          <h1 className="relative  text-5xl md:text-7xl font-bold text-black text-center animate-fadeInUp delay-200">
          <img className=" absolute w-9 -top-5 h-auto " src="src/assets/one.svg" alt="" />
            <span> I AM</span> <span className="text-orange-500">DIPENDRA</span>
            <FaRegLightbulb
              className="absolute -top-4 -right-6 flex flex-center ml-3 h-10 w-auto animate-pulse delay-500"
              style={{ color: "orange" }}
            />
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-black text-center animate-fadeInUp delay-400">
            <span>BHANDARI</span><span className="text-orange-500">.</span>
          </h1>
          <img className="w-68 h-8 mt-2 animate-fadeInUp " src="curve-text-border-wave.png" alt="" />
          <p className="mt-6 text-2xl md:text-2xl font-extralight text-black text-center animate-fadeInUp delay-600">
           WEB DEVELOPER
          </p>

          <button className=" relative mt-6 px-6 py-3 bg-orange-500 text-white text-lg rounded-md  duration-100efe  hover:scale-[1.01] hover:shadow-lg shadow-black">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
