import React from "react";

const Aboutnext = () => {
  return (
    <section
      id="aboutnext"
      className="about h-[600px] w-full flex flex-col md:flex-row bg-gradient-to-br from-white to-blue-100"
    >
      {/* Text Div */}
      <div className="w-full md:w-[60%] flex items-center justify-center bg-[#F0F7FF] z-10 px-4 md:px-10">
        <div className="text-center text-black bg-[#F0F7FF] py-8 px-6 border border-[#F0F7FF] rounded-full transform translate-x-0 lg:translate-x-48">
          <h1 className="text-2xl md:text-3xl font-bold">About Me</h1>
          <p className="text-sm md:text-lg mt-2">
            This is a brief description about me, displayed in the text section.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            nostrum saepe iure aut, aliquid provident ea doloremque. Maiores
            architecto dolorum id, asperiores, recusandae commodi blanditiis
            accusamus sint eaque placeat similique.
          </p>
          <strong>
            <i className="mt-4 inline-block text-sm">Ph. No: 9804365848</i>
          </strong>
          <p className="font-mono uppercase text-sm mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Learn more
            </a>
          </p>
        </div>
      </div>

      {/* Image Div */}
      <div className="w-full md:w-[40%] bg-[url('/up.jpg')] bg-cover bg-center opacity-90 animate-fadeInUp delay-400 h-[300px] md:h-[600px]"></div>
    </section>
  );
};

export default Aboutnext;
