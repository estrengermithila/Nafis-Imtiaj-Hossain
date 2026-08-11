import useProjects from "../../hooks/useProjects";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFolderOpen,
} from "react-icons/fa";

const Projects = () => {
  const { projects, loading } = useProjects();


  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">
          No Projects Found
        </h2>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="w-full bg-gray-50 py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
            My Portfolio
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">
            Explore some of my recent works built with modern web
            technologies, clean UI design and scalable backend
            architecture.
          </p>

          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-green-500 via-lime-400 to-cyan-400 mx-auto mt-6"></div>

        </div>

        {/* Projects Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project._id}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-gray-200
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Top Gradient */}

              <div className="h-2 bg-gradient-to-r from-green-500 via-lime-400 to-cyan-400"></div>

              <div className="p-7">

                                {/* Category */}

                {project.category && (
                  <div className="flex items-center gap-2 mb-4">

                    <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                      <FaFolderOpen className="text-green-600 text-sm" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-400">
                        Category
                      </p>

                      <p className="text-sm font-semibold text-green-700">
                        {project.category}
                      </p>
                    </div>

                  </div>
                )}

                {/* Title */}

                <h3
                  className="
                    text-2xl
                    lg:text-3xl
                    font-bold
                    text-slate-900
                    leading-tight
                    mb-4
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    text-gray-600
                    leading-7
                    mb-6
                    line-clamp-4
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mb-8">

                  {Array.isArray(project.technologies)
                    ? project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="
                            px-3
                            py-2
                            rounded-full
                            bg-green-50
                            border
                            border-green-200
                            text-green-700
                            text-xs
                            font-semibold
                            hover:bg-green-600
                            hover:text-white
                            hover:border-green-600
                            transition-all
                            duration-300
                          "
                        >
                          {tech}
                        </span>
                      ))
                    : project.technologies
                        ?.split(",")
                        .map((tech, index) => (
                          <span
                            key={index}
                            className="
                              px-3
                              py-2
                              rounded-full
                              bg-green-50
                              border
                              border-green-200
                              text-green-700
                              text-xs
                              font-semibold
                              hover:bg-green-600
                              hover:text-white
                              hover:border-green-600
                              transition-all
                              duration-300
                            "
                          >
                            {tech.trim()}
                          </span>
                        ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-3">
                                    {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-slate-900
                        text-white
                        py-3
                        font-medium
                        hover:bg-slate-700
                        transition-all
                        duration-300
                      "
                    >
                      <FaGithub className="text-lg" />
                      GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-green-500
                        text-green-600
                        py-3
                        font-medium
                        hover:bg-green-600
                        hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;