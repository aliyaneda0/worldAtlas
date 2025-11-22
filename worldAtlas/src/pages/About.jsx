import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import countriesData from "../api/Countrydata.json";

export const About = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
   <section className=" max-w-5xl mx-auto mb-[90px] bg-black text-white py-8 min-h-screen flex flex-col items-center">
      {/* Section Header */}
      <div className="max-w-[64rem] mx-auto mt-1 w-full text-center px-6">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-12 urbanist">
          Here are the{" "}
          <span className="text-white ">Interesting Facts</span> we’re proud of
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-5xl w-full grid  gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-3 px-4">
        {countries.map((country, index) => (
        <div
            key={index}
            // initial={{ opacity: 0, y: 40, scale: 0.9 }}
            // whileInView={{ opacity: 1, y: 0, scale: 1 }}
            // transition={{
            //   duration: 1.5,
            //   delay: index * 0.15,
            //   type: "spring",
            //   stiffness: 0,
            // }}
            // viewport={{ once: true }
            className="relative bg-gradient-to-bl from-zinc-950/20 via-zinc-700/60 to-zinc-950/10
                        backdrop-blur-xl rounded-3xl px-6 py-3 shadow-xl border border-transparent
                         hover:border-gray-700 hover:scale-105 transform hover:shadow-gray-300/20 transition-all duration-300"
          >
            <h3 className="text-2xl md:text-xl font-semibold mb-2 text-white">
              {country.countryName}
            </h3>

            <p className="text-sm md:text-base mb-1">
              <span className="font-light text-gray-300">Capital:</span>{" "}
                 <span className="text-white font-semibold" >{country.capital || "N/A"}</span>
            </p>

            <p className="text-sm md:text-base mb-2">
              <span className="font-semibold text-gray-300">Population:</span>{" "}
              {country.population
                ? country.population.toLocaleString()
                : "Unknown"}
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              <span className="font-semibold text-white-400">Fact:</span>{" "}
              {country.interestingFact}
            </p>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-zinc-500/10 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

