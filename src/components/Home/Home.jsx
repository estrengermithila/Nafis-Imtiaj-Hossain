import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaGoogle,
  FaResearchgate,
  FaDownload,
} from "react-icons/fa";

import bgImg from "../../assets/globe.png";
import cv from '../../assets/cv.pdf'

const Home = () => {
  // Typing Animation
  const words = [
    "Nafis Imtiaj Hossain",
    "Research Assistant",
    "Climate Researcher",
    "GIS & Remote Sensing Expert",
  ];

  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeSocial, setActiveSocial] = useState("");

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/YOUR_USERNAME",
  email: "nafis25ih@gmail.com",
  scholar: "https://scholar.google.com/citations?user=0leT8GAAAAAJ&hl=en",
  researchgate: "https://www.researchgate.net/profile/Nafis-Imtiaj-Hossain",
};

  useEffect(() => {
    const currentWord = words[loopNum % words.length];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#071426] overflow-hidden flex items-center pt-24"
    >
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Globe"
        className="absolute right-0 top-0 h-full w-[55%] object-cover opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <p className="text-lime-400 text-xl font-semibold mb-2">
            Hello, I'm
          </p>

          <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight min-h-[90px]">
            {text}
            <span className="text-lime-400 animate-pulse">|</span>
          </h1>

          <h2 className="text-gray-200 text-2xl mt-5 font-semibold">
            Research Assistant at ICCCAD
          </h2>

          <h3 className="text-gray-300 text-xl mt-2">
            M.Sc. Researcher at BUET
          </h3>

          <p className="text-gray-300 leading-8 mt-8 max-w-xl">
            I work on climate change, water resources, environmental
            research using GIS, remote sensing and data-driven evidence to
            build resilient communities and informed policies.
          </p>

        
         {/* Buttons */}
<div className="flex flex-wrap items-center gap-5 mt-10">

  {/* Download CV */}
  <a
    href={cv}
    download
    className="
      group
      inline-flex
      items-center
      gap-3
      bg-lime-400
      text-[#071426]
      font-semibold
      px-7
      py-3.5
      rounded-lg
      shadow-lg
      transition-all
      duration-300
      hover:bg-lime-500
      hover:-translate-y-1
      hover:shadow-lime-400/50
    "
  >
    <FaDownload className="text-lg group-hover:animate-bounce" />
    Download CV
  </a>

  {/* Contact Me */}
  <a
    href="#contact"
    className="
      inline-flex
      items-center
      gap-3
      border
      border-white
      text-white
      font-semibold
      px-7
      py-3.5
      rounded-lg
      transition-all
      duration-300
      hover:bg-white
      hover:text-[#071426]
      hover:-translate-y-1
    "
  >
    <FaEnvelope className="text-lg" />
    Contact Me
  </a>

</div>

          {/* Social Icons */}
         <div className="flex gap-6 mt-10 text-2xl">

  <a
    href={socialLinks.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => setActiveSocial("linkedin")}
  >
    <FaLinkedin
      className={`transition duration-300 cursor-pointer ${
        activeSocial === "linkedin"
          ? "text-lime-400"
          : "text-gray-300 hover:text-lime-400"
      }`}
    />
  </a>

  <a
    href={socialLinks.email}
    onClick={() => setActiveSocial("email")}
  >
    <FaEnvelope
      className={`transition duration-300 cursor-pointer ${
        activeSocial === "email"
          ? "text-lime-400"
          : "text-gray-300 hover:text-lime-400"
      }`}
    />
  </a>

  <a
    href={socialLinks.scholar}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => setActiveSocial("scholar")}
  >
    <FaGoogle
      className={`transition duration-300 cursor-pointer ${
        activeSocial === "scholar"
          ? "text-lime-400"
          : "text-gray-300 hover:text-lime-400"
      }`}
    />
  </a>

  <a
    href={socialLinks.researchgate}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => setActiveSocial("researchgate")}
  >
    <FaResearchgate
      className={`transition duration-300 cursor-pointer ${
        activeSocial === "researchgate"
          ? "text-lime-400"
          : "text-gray-300 hover:text-lime-400"
      }`}
    />
  </a>

</div>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-r from-green-400/30 via-cyan-400/10 to-transparent blur-2xl"></div>
    </section>
  );
};

export default Home;