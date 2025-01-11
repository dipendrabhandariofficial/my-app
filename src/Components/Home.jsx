import React from "react";
import { FaRegLightbulb } from "react-icons/fa";

const Home = () => {
  const generatedocument = () => {
    const pdfUrl = "Dipendra Bhandari.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Dipendra Bhandari.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="home" className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="space-y-4 text-center relative">
          {/* Decorative background elements */}
          <div className="absolute -z-10 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          
          {/* Main content */}
          <h1 className="text-5xl font-bold animate-fadeInUp">
            HI<span className="text-orange-500">,</span>
          </h1>

          <div className="relative inline-block animate-fadeInUp delay-400">
            <h1 className="text-5xl md:text-7xl font-bold">
              <img
                src="public/one.svg"
                alt=""
                className="absolute w-9 -top-5 left-0 animate-float"
              />
              I AM{" "}
              <span className="text-orange-500">
                <span className="italic">D</span>IPENDRA
              </span>
              <FaRegLightbulb 
                className="absolute -top-4 -right-6 h-10 w-auto animate-glow text-orange-500"
              />
            </h1>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold animate-fadeInUp delay-600">
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

          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-400 
                           text-white text-lg rounded-lg transform transition-all duration-300
                           hover:scale-105 hover:shadow-xl hover:shadow-orange-200
                           active:scale-95" onClick={generatedocument}>
            Download Resume
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0%, 100% { filter: brightness(1); transform: scale(1); }
          50% { filter: brightness(1.3); transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-400 { animation-delay: 400ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-800 { animation-delay: 800ms; }
      `}</style>
    </div>
  );
};

export default Home;