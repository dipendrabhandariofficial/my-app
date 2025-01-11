import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Aboutnext = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imageRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration:800,
        delay:200,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%", // Start animation when the image is 80% in view
          end: "top 10%",  // End animation when the image is 20% in view
          scrub: true,     // Smooth scrubbing animation
        },
      }
    );
  }, []);

  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration:800,
        delay:200,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%", // Start animation when the image is 80% in view
          end: "top 10%",  // End animation when the image is 20% in view
          scrub: true,     // Smooth scrubbing animation
        },
      }
    );
  }, []);

  return (
    <section
      id="aboutnext"
      className="about  h-auto w-full flex flex-col md:flex-row bg-gradient-to-br from-white to-blue-100"
    >
      {/* Text Div */}
      <div  ref={textRef} className=" textRef w-full md:w-[60%] flex items-center justify-center bg-[#F0F7FF] z-10 px-4 md:px-10">
        <div className="text-center text-black bg-[#F0F7FF] py-8 px-6 border border-[#F0F7FF] rounded-full transform translate-x-0 lg:translate-x-48">
          <h1 className="text-2xl md:text-3xl font-bold font-[sansserif] ">About Me</h1>
          <p className="text-sm   mt-2  h-[50%]  text-slate-800">
            Driven and resourceful professional with 
            a Bachelor's degree in Information Management. I enjoy working on creative projects, 
            such as building responsive websites using modern tools like React and Tailwind CSS.
            Beyond my technical abilities, I am an avid reader with a deep appreciation for literature, Music and Cinema. 
            <br />
            I am constantly seeking opportunities to grow, collaborate, and make meaningful contributions, whether in
             the field of IT, management, or Entertainmet. Let's connect and create something extraordinary!
          </p>
          <strong>
            <i className="mt-4 inline-block text-sm">Ph. No: 9804365848</i>
          </strong>
          <p className="font-mono uppercase text-sm mt-4">
            {/* <a href="#" className="text-blue-500 hover:underline">
              Learn more
            </a> */}
          </p>
        </div>
      </div>

      {/* Image Div */}
      <div
        ref={imageRef}
        className="w-full md:w-[40%] opacity-90 h-[300px] md:h-[600px]  "
      >
        <img className="h-full  w-full object-cover" src="up.jpg" alt="Image Description" />
      </div>
    </section>
  );
};

export default Aboutnext;