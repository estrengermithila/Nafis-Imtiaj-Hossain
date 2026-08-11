import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import useProjects from "../hooks/useProjects";


const Projects = () => {

  const {
    projects,
    loading,
  } = useProjects();


  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="text-center text-gray-500">
          Loading projects...
        </div>
      </section>
    );
  }


  return (
    <section
      id="projects"
      className="
        w-full
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >

      <div className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
      ">


        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="
            text-center
            mb-12
            lg:mb-16
          "
        >

          <h2 className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-[#071426]
          ">
            Projects
          </h2>
          


          <div className="
            w-24
            h-1
            mx-auto
            mt-5
            rounded-full
            bg-gradient-to-r
            from-lime-400
            via-green-400
            to-cyan-400
          " />


          <p className="
            mt-5
            text-gray-500
            text-base
            sm:text-lg
          ">
            Research, development and technical projects
          </p>

        </motion.div>



        {/* Empty State */}

        {projects.length === 0 ? (

          <div className="
            text-center
            py-16
            text-gray-500
          ">
            No projects available.
          </div>

        ) : (


          /* Project Grid */

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          ">


            {projects.map((project, index) => (

              <motion.div
                key={project._id}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  y: -8,
                }}

                className="
                  group
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-gray-200
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >


                {/* Image */}

                {project.image ? (

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-52
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />

                ) : (

                  <div className="
                    w-full
                    h-52
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                    text-gray-400
                  ">
                    No Image
                  </div>

                )}



                <div className="p-6">


                  {/* Category */}

                  {project.category && (

                    <span className="
                      inline-block
                      text-sm
                      font-medium
                      text-green-600
                      bg-green-50
                      px-3
                      py-1
                      rounded-full
                    ">
                      {project.category}
                    </span>

                  )}



                  {/* Title */}

                  <h3 className="
                    text-xl
                    font-bold
                    text-[#071426]
                    mt-4
                  ">
                    {project.title}
                  </h3>



                  {/* Year */}

                  {project.year && (

                    <p className="
                      text-sm
                      text-gray-400
                      mt-1
                    ">
                      {project.year}
                    </p>

                  )}



                  {/* Description */}

                  {project.description && (

                    <p className="
                      text-gray-600
                      leading-7
                      mt-4
                      line-clamp-4
                    ">
                      {project.description}
                    </p>

                  )}



                  {/* Technologies */}

                  {project.technologies?.length > 0 && (

                    <div className="
                      flex
                      flex-wrap
                      gap-2
                      mt-5
                    ">

                      {project.technologies.map(
                        (technology, techIndex) => (

                          <span
                            key={`${technology}-${techIndex}`}
                            className="
                              px-3
                              py-1
                              rounded-full
                              bg-green-100
                              text-green-700
                              text-xs
                              font-medium
                            "
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                  )}



                  {/* Links */}

                  <div className="
                    flex
                    flex-wrap
                    gap-3
                    mt-6
                  ">


                    {project.github && (

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-lg
                          bg-[#071426]
                          text-white
                          hover:bg-gray-800
                          transition
                        "
                      >

                        <FaGithub />

                        GitHub

                      </a>

                    )}



                    {project.liveLink && (

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-lg
                          bg-green-600
                          text-white
                          hover:bg-green-700
                          transition
                        "
                      >

                        <FaExternalLinkAlt />

                        Live Demo

                      </a>

                    )}

                  </div>


                </div>

              </motion.div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
};


export default Projects;