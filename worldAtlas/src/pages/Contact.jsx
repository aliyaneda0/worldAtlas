import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center py-14">
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Contact <span className="text-White-400">Us</span>
        </h2>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-md bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 p-8 rounded-2xl border border-zinc-700 shadow-lg backdrop-blur-xl hover:shadow-cyan-500/10 transition-all duration-300">
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full bg-transparent border border-zinc-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full bg-transparent border border-zinc-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
            />
          </div>

          <div>
            <textarea
              placeholder="Enter Your Message"
              rows="4"
              className="w-full bg-transparent border border-zinc-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1F1F1F] text-black font-semibold py-3 rounded-md hover:bg-zinc-400 text-white transition duration-300"
          >
            SEND
          </button>
        </form>
      </div>

      {/* Footer Section */}
     
    </section>
  );
};



