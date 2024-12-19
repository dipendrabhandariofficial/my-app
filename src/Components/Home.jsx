import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import { FaRegLightbulb } from "react-icons/fa";

function Home() {
  return (
    <div>
    <div className="h-screen w-screen overflow-x-hidden flex flex-col bg-gradient-to-b from-white to-slate-300">
      {/* <Navbar /> */}

      <div
        name="home"
        className="flex flex-col items-center justify-center grow z-1"
        // style={{
        //   backgroundImage: `url('/')`,
        //   backgroundSize: "cover", // Adjust this as needed
        //   backgroundPosition: "center",
        //   width: "100vw", // Example width
        // }}
        
      >
        <FaRegLightbulb className="flex flex-center ml-3  animate-pulse delay-500"style={{color:"orange"}}/>
        <h1 className="text-5xl  font-bold text-black text-center animate-fadeInUp">
          <span>HI</span> <span className="text-orange-500">,</span>
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-black text-center animate-fadeInUp delay-200">
          <span> I AM</span> <span className="text-orange-500">DIPENDRA</span>
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-black text-center animate-fadeInUp delay-400">
          <span>BHANDARI</span> <span className="text-orange-500">.</span>
        </h1>
        <p className="mt-10 text-xl md:text-2xl text-gray-600 text-center animate-fadeInUp delay-600">
          UI/UX DESIGNER AND WEB DEVELOPER
        </p>

        <button className="mt-8 px-6 py-3 bg-orange-500 text-white text-lg rounded-md hover:bg-orange-600 duration-100efe  hover:scale-110">
          Download Resume
        </button>
      </div>
    </div>
    </div>
  );
}

export default Home;
