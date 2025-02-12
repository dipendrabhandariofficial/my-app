import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-r from-sky-600 via-blue-500 to-indigo-600">
      {/* Rotating Circular Animation */}
      <motion.div
        className="absolute w-32 h-32 border-4 rounded-full border-t-orange-500 border-l-sky-400 border-b-blue-700 border-r-indigo-500 animate-spin-slow"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 2,
        }}
      ></motion.div>

      {/* Animated Letters */}
      <motion.div
        className="flex items-center space-x-2"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        {["D", "I", "P", "E", "N", "D", "R", "A"].map((letter, index) => (
          <motion.span
            key={index}
            className="font-bold text-white md:text-6xl sm:text-3xl drop-shadow-lg"
            animate={{
              scale: [1, 1.2, 1],
              color: ["#FFD700", "#FF4500", "#FFD700"], // Gold-Orange gradient
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 0.2 * (index + 1),
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Preloader;
