import { motion } from "framer-motion";
import {
  FaUser,
  FaClock,
  FaProjectDiagram,
  FaBook,
  FaMicrophone,
} from "react-icons/fa";

import profile from "../../assets/logo.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2
              className="
                flex
                items-center
                gap-3
                text-3xl
                sm:text-4xl
                font-bold
                text-slate-900
                mb-6
                lg:mb-8
              "
            >
              <FaUser className="text-green-600" />
              About Me
            </h2>

            <p
              className="
                text-gray-600
                text-base
                sm:text-lg
                leading-8
                text-justify
              "
            >
              Over 3 years of experience in research and development.
              Enthusiasm in oceanography and water resources
              management, passionate about climate science,
              environmental science, climate change and finance.
            </p>

            <p
              className="
                mt-6
                lg:mt-8
                text-gray-600
                text-base
                sm:text-lg
                leading-8
                text-justify
              "
            >
              Expertise includes field surveys (KII, FGD),
              KoboToolbox, NVivo, GIS mapping,
              Remote Sensing, Statistical Analysis,
              SPSS, Excel, Python and R Programming.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div
              className="
                w-56
                h-56
                sm:w-72
                sm:h-72
                lg:w-80
                lg:h-80
                rounded-full
                p-2
                bg-gradient-to-r
                from-green-400
                via-lime-400
                to-cyan-400
                shadow-[0_0_40px_rgba(34,197,94,0.4)]
              "
            >
              <img
                src={profile}
                alt="Profile"
                className="
                  w-full
                  h-full
                  rounded-full
                  object-cover
                  border-4
                  border-white
                  transition-all
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          </motion.div>

        </div>

        {/* এখান থেকে Stats Section শুরু হবে (Part 2) */}
                {/* Stats */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            lg:gap-6
            mt-14
            lg:mt-16
          "
        >
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-lg
              border
              border-gray-200
              text-center
            "
          >
            <FaClock className="text-3xl text-green-600 mb-4 mx-auto" />

            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
              3+
            </h3>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Years Experience
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-lg
              border
              border-gray-200
              text-center
            "
          >
            <FaProjectDiagram className="text-3xl text-green-600 mb-4 mx-auto" />

            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
              10+
            </h3>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Research Projects
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-lg
              border
              border-gray-200
              text-center
            "
          >
            <FaBook className="text-3xl text-green-600 mb-4 mx-auto" />

            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
              15+
            </h3>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Publications
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-lg
              border
              border-gray-200
              text-center
            "
          >
            <FaMicrophone className="text-3xl text-green-600 mb-4 mx-auto" />

            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
              5+
            </h3>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Conferences
            </p>
          </motion.div>
        </div>

        {/* Research Expertise */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="
            mt-16
            lg:mt-20
            bg-gray-50
            rounded-3xl
            p-6
            sm:p-8
            lg:p-10
            border
            border-gray-200
          "
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
            Research Expertise
          </h3>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              "Climate Change",
              "Water Resources",
              "GIS",
              "Remote Sensing",
              "Spatial Analysis",
              "Environmental Science",
              "Research Methodology",
              "Data Analysis",
              "Python",
              "R Programming",
              "SPSS",
              "Microsoft Excel",
              "KoboToolbox",
              "NVivo",
              "Research Writing",
              "Policy Analysis",
            ].map((skill) => (
              <span
                key={skill}
                className="
                  px-4
                  sm:px-5
                  py-2
                  sm:py-3
                  rounded-full
                  bg-green-100
                  text-green-700
                  border
                  border-green-200
                  text-sm
                  sm:text-base
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-green-600
                  hover:text-white
                  hover:scale-105
                  cursor-pointer
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;