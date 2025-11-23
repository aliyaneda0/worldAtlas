// HeroSection.jsx
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
// import HeroImg from "../../public/Images/HeroImg.jpg"; 
// import HeroSecIm from "../../worldAtlas/assets/HeroSecImg.png";
// adjust path as needed

const Herosection = () => {
  return (
    <section className=" text-white py-11 md:py-20   relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-7 flex flex-col md:flex-row gap-[2.2rem]   sm:gap-[4.2rem] items-center justify-between">
        
        {/* Left Section */}
        <div className="md:w-1/2 z-10 ">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-[2rem] mb-6">
            Explore the World,One<br />Country at a Time
          </h1>
          <p className="text-md md:text-2lg  text-gray-300 mb-8 max-w-md">
            Discover the history, culture, and beauty of every nation. Sort,
            search,and filter through countries to find the details you need.
          </p>
          <button className="flex items-center gap-3 bg-black-500 border border-white-50-smooth  hover:bg-gradient-to-b from-green-50 to-white-50 text-white font-semibold py-3 px-4 rounded-full transition duration-300 shadow-lg btn-inline btn-darken">
            Start Exploring
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Right Section */}
        <div className=" w-[420px]  sm:w-[500px] mt:0 md:mt-2 flex justify-center  relative p-2 shadow-lg  ">
          <img
            src="/worldAtlas/Images/HeroImg.png"
            alt="World Landmarks"
            className="w-[430px]  sm:w-[500px] h-auto object-contain drop-shadow-2xl  "
          />
        </div>
      </div>

      {/* Bottom Text
      <div className="text-center text-xl mt-20 font-semibold tracking-wide">
        Here are the Interesting Facts we're proud of
      </div> */}
    </section>
  );
};

export default Herosection;
