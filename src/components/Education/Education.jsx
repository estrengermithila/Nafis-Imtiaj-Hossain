
import React, { useEffect, useState } from "react";
import axiosPublic from "../../api/axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

// Education Image
import educationImg from "../../assets/contact.jpg";

const Education = () => {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  // =====================================
  // Fetch Education from Deployed API
  // =====================================
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await axiosPublic.get("/profile");

        console.log("EDUCATION RESPONSE:", res.data);

        if (res.data?.success) {
          setEducations(res.data?.data?.education || []);
        }
      } catch (error) {
        console.error("Failed to fetch education:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  // =====================================
  // Show First 2 / All Education
  // =====================================
  const visibleEducations = showAll
    ? educations
    : educations.slice(0, 2);

  // =====================================
  // Loading
  // =====================================
  if (loading) {
    return (
      <section className="w-full bg-white py-24">
        <div className="flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-lime-400 rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  // =====================================
  // Main Section
  // =====================================
  return (
    <section
      id="education"
      className="w-full bg-white py-20 md:py-24"
    >
      <div className="w-full max-w-[1450px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* =====================================
              LEFT SIDE - IMTIAZ PHOTO
          ===================================== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-lime-300/20 blur-3xl"></div>

              {/* Image */}
              <div
                className="
                  relative
                  w-[280px]
                  h-[280px]
                  sm:w-[350px]
                  sm:h-[350px]
                  md:w-[400px]
                  md:h-[400px]
                  lg:w-[430px]
                  lg:h-[430px]
                  rounded-full
                  overflow-hidden
                  border-[7px]
                  border-lime-400
                  shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                  bg-white
                "
              >
                <img
                  src={educationImg}
                  alt="Imtiaz"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>
            </div>
          </motion.div>

          {/* =====================================
              RIGHT SIDE - EDUCATION
          ===================================== */}
          <div className="w-full">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-[#061B36]
                "
              >
                My Academic Background
              </h2>
            </motion.div>

            {/* =====================================
                EDUCATION CARDS
            ===================================== */}
            {educations.length === 0 ? (
              <p className="text-gray-500">
                No education information available.
              </p>
            ) : (
              <div className="space-y-8">
                <AnimatePresence mode="popLayout">
                  {visibleEducations.map((education, index) => (
                    <motion.div
                      key={education._id || index}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className={`
                        group
                        relative
                        bg-white
                        rounded-2xl
                        p-7
                        md:p-8
                        shadow-[0_8px_25px_rgba(0,0,0,0.10)]
                        border-l-[5px]
                        ${
                          index % 2 === 0
                            ? "border-lime-400"
                            : "border-cyan-400"
                        }
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-[0_15px_35px_rgba(0,0,0,0.14)]
                      `}
                    >

                      {/* Graduation Icon */}
                      <div
                        className="
                          absolute
                          top-7
                          right-7
                          w-10
                          h-10
                          rounded-full
                          bg-gray-50
                          flex
                          items-center
                          justify-center
                          text-[#061B36]
                          opacity-0
                          group-hover:opacity-100
                          transition-all
                          duration-300
                        "
                      >
                        <FaGraduationCap />
                      </div>

                      {/* Degree */}
                      <h3
                        className="
                          text-xl
                          md:text-2xl
                          font-bold
                          text-[#061B36]
                          pr-10
                        "
                      >
                        {education.degree}
                      </h3>

                      {/* Institution */}
                      <p
                        className={`
                          mt-2
                          font-semibold
                          ${
                            index % 2 === 0
                              ? "text-lime-600"
                              : "text-cyan-600"
                          }
                        `}
                      >
                        {education.institution}
                      </p>

                      {/* Field */}
                      {education.field && (
                        <p className="mt-1 text-gray-500">
                          {education.field}
                        </p>
                      )}

                      {/* Start / End Year */}
                      {(education.startYear || education.endYear) && (
                        <p className="mt-2 text-gray-500 text-sm">
                          {education.startYear} - {education.endYear}
                        </p>
                      )}

                      {/* Description */}
                      {education.description && (
                        <p
                          className="
                            mt-7
                            text-[#45617F]
                            leading-8
                            text-sm
                            md:text-base
                          "
                        >
                          {education.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* =====================================
                VIEW ALL / VIEW LESS
            ===================================== */}
            {educations.length > 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center lg:justify-start mt-10"
              >
                <button
                  type="button"
                  onClick={() => setShowAll((prev) => !prev)}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    px-7
                    py-3.5
                    rounded-full
                    font-semibold
                    text-white
                    bg-gradient-to-r
                    from-lime-400
                    to-cyan-400
                    shadow-lg
                    shadow-cyan-200/40
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  {showAll ? (
                    <>
                      View Less
                      <FaChevronUp
                        className="
                          group-hover:-translate-y-1
                          transition-transform
                        "
                      />
                    </>
                  ) : (
                    <>
                      View All Education
                      <FaChevronDown
                        className="
                          group-hover:translate-y-1
                          transition-transform
                        "
                      />
                    </>
                  )}
                </button>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

