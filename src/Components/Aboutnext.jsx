import React from "react";
import { WiStars } from "react-icons/wi";

const Aboutnext = () => {
  return (
    <div className="h-[600px] w-full flex bg-gradient-to-br from-white to-blue-100">
   
      
      

      {/* Text Div - Takes the other half and centers the text */}
      <div className="w-[60%] flex items-center justify-center bg-white-200 z-10 ">
        <div className="text-center text-black translate-x-[20%] bg-white py-8 px-10">
          <h1 className="text-3xl font-bold translate-x-2 hover:text-orange-500 hover:underline underline-offset-4">
            About Me
          </h1>
          <p className="text-lg mt-2 text-center">
            This is a brief description about me, displayed in the text section.
            . Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Facere nostrum saepe iure aut,
            aliquid provident ea doloremque. Maiores architecto dolorum id,
            asperiores, recusandae commodi blanditiis accusamus sint eaque
            placeat similique.
          </p>
          <strong>
            <i className="mt-4 inline-block pl-8">Ph. No: 9804365848</i>
          </strong>
          <p className="font-mono uppercase text-sm hover:text-orange-500 mt-4 pl-8 focus:underline" > <a href=""> learn more</a></p>
        </div>
      </div>
      {/* Image Div - Takes half the width */}
      <div className="w-[40%]  bg-[url('/up.jpg')] bg-cover bg-center opacity-[0.87]  animate-fadeInUp delay-400  "></div>
    </div>
  );
};

export default Aboutnext;
