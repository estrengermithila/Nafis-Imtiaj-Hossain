
import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import cvFile from "../../assets/cv.pdf";

import {
  FaLinkedin,
  FaEnvelope,
  FaGoogle,
  FaResearchgate,
  FaDownload,
} from "react-icons/fa";

import bgImg from "../../assets/globe.png";

import axiosPublic from "../../api/axios";

const Home = () => {
  // =====================================
  // Typing Animation Words
  // =====================================

  const words = [
    "Nafis Imtiaj Hossain",
    "Research Assistant",
    "Climate Researcher",
    "GIS & Remote Sensing Expert",
  ];

  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // =====================================
  // Active Social
  // =====================================

  const [activeSocial, setActiveSocial] = useState("");

  // =====================================
  // Profile State
  // =====================================

  const [profile, setProfile] = useState(null);

  // =====================================
  // Loading State
  // =====================================

  const [loading, setLoading] = useState(true);

  // =====================================
  // Fetch Profile
  // =====================================

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosPublic.get("/profile");

        console.log("HOME PROFILE:", res.data);

        setProfile(res.data?.data);
      } catch (error) {
        console.error("Profile fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // =====================================
  // Typing Animation
  // =====================================

  useEffect(() => {
    const currentWord = words[loopNum % words.length];

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setText(
            currentWord.substring(0, text.length - 1)
          );
        } else {
          setText(
            currentWord.substring(0, text.length + 1)
          );
        }

        // =====================================
        // Start deleting
        // =====================================

        if (!isDeleting && text === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }

        // =====================================
        // Move to next word
        // =====================================

        if (isDeleting && text === "") {
          setIsDeleting(false);

          setLoopNum((prev) => prev + 1);
        }
      },
      isDeleting ? 60 : 120
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  // =====================================
  // Social Links
  // =====================================

  const socialLinks = {
    linkedin:
      profile?.socialLinks?.linkedin ||
      "https://www.linkedin.com/",

    email:
      profile?.email ||
      "nafis25ih@gmail.com",

    scholar:
      profile?.socialLinks?.googleScholar ||
      "https://scholar.google.com/citations?user=0leT8GAAAAAJ&hl=en",

    researchgate:
      profile?.socialLinks?.researchgate ||
      "https://www.researchgate.net/profile/Nafis-Imtiaj-Hossain",
  };

  // =====================================
  // Profile Information
  // =====================================

  const name =
    profile?.name || "Nafis Imtiaj Hossain";

  const title =
    profile?.title || "Research Assistant";

  const about =
    profile?.about ||
    profile?.description ||
    "I work on climate change, water resources, environmental research using GIS, remote sensing and data-driven evidence to build resilient communities and informed policies.";

  // =====================================
  // Download CV
  // =====================================

  const handleDownloadCV = () => {
    const link = document.createElement("a");

    link.href = cvFile;

    link.download = "Nafis-Imtiaj-Hossain-CV.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  // =====================================
  // Render
  // =====================================

  return (
    <section
      id="home"
      className="
        relative
        w-full
        min-h-screen
        bg-[#071426]
        overflow-hidden
        flex
        items-center
        pt-24
      "
    >
      {/* =================================
          Background
      ================================= */}

      <img
        src={bgImg}
        alt="Globe"
        className="
          absolute
          right-0
          top-0
          h-full
          w-[55%]
          object-cover
          opacity-80
        "
      />

      {/* =================================
          Overlay
      ================================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#071426]
          via-[#071426]/90
          to-transparent
        "
      />

      {/* =================================
          Main Content
      ================================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-8
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="max-w-2xl"
        >
          {/* =================================
              Hello
          ================================= */}

          <p className="text-lime-400 text-4xl font-semibold mb-2">
            Hello, I'm
          </p>

          {/* =================================
              Name / Typing
          ================================= */}

          <h1
            className="
              text-white
              text-5xl
              md:text-6xl
              font-extrabold
              leading-tight
              min-h-[90px]
            "
          >
            {text}

            <span className="text-lime-400 animate-pulse">
              |
            </span>
          </h1>

          {/* =================================
              Position
          ================================= */}

          <h2
            className="
              text-gray-200
              text-2xl
              mt-5
              font-semibold
            "
          >
            {title}
          </h2>

          {/* =================================
              University
          ================================= */}

          <h3
            className="
              text-gray-300
              text-xl
              mt-2
            "
          >
            M.Sc. Researcher at BUET
          </h3>

          {/* =================================
              About
          ================================= */}

          <p
            className="
              text-gray-300
              leading-8
              mt-8
              max-w-xl
            "
          >
            {about}
          </p>

          {/* =================================
              Buttons
          ================================= */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-5
              mt-10
            "
          >
            {/* =================================
                Download CV
            ================================= */}

            <button
              type="button"
              onClick={handleDownloadCV}
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
              "
            >
              <FaDownload />
              Download CV
            </button>

            {/* =================================
                Contact Button
            ================================= */}

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
              <FaEnvelope />
              Contact Me
            </a>
          </div>

          {/* =================================
              Social Icons
          ================================= */}

          <div
            className="
              flex
              gap-6
              mt-10
              text-2xl
            "
          >
            {/* =================================
                LinkedIn
            ================================= */}

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                setActiveSocial("linkedin")
              }
            >
              <FaLinkedin
                className={
                  activeSocial === "linkedin"
                    ? "text-lime-400"
                    : "text-gray-300 hover:text-lime-400"
                }
              />
            </a>

            {/* =================================
                Email
            ================================= */}

            <a
              href={`mailto:${socialLinks.email}`}
              onClick={() =>
                setActiveSocial("email")
              }
            >
              <FaEnvelope
                className="
                  text-gray-300
                  hover:text-lime-400
                "
              />
            </a>

            {/* =================================
                Google Scholar
            ================================= */}

            <a
              href={socialLinks.scholar}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                setActiveSocial("scholar")
              }
            >
              <FaGoogle
                className="
                  text-gray-300
                  hover:text-lime-400
                "
              />
            </a>

            {/* =================================
                ResearchGate
            ================================= */}

            <a
              href={socialLinks.researchgate}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                setActiveSocial("researchgate")
              }
            >
              <FaResearchgate
                className="
                  text-gray-300
                  hover:text-lime-400
                "
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* =================================
          Bottom Glow
      ================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-28
          bg-gradient-to-r
          from-green-400/30
          via-cyan-400/10
          to-transparent
          blur-2xl
        "
      />
    </section>
  );
};

export default Home;

