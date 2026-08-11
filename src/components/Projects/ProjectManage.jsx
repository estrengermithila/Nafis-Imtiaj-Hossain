import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosPublic from "../../api/axios";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ProjectManage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // =====================================
  // Fetch Projects
  // =====================================

  const fetchProjects = async () => {
  try {
    setLoading(true);

    const res = await axiosPublic.get("/project");

    console.log("Project API Response:", res.data);

    setProjects(res.data.data || []);
  } catch (error) {
    console.error("Fetch projects error:", error);

    setProjects([]);

    alert(
      error?.response?.data?.message ||
        "Failed to load projects"
    );
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchProjects();
  }, []);

  // =====================================
  // Delete Project
  // =====================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);

     await axiosPublic.delete(`/project/${id}`);

      // Delete করার পর UI থেকে project remove
      setProjects((prevProjects) =>
        prevProjects.filter(
          (project) => project._id !== id
        )
      );

      alert("Project deleted successfully!");
    } catch (error) {
      console.error("Delete project error:", error);

      alert(
        error?.response?.data?.message ||
          "Failed to delete project"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // =====================================
  // Loading
  // =====================================

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  // =====================================
  // Main UI
  // =====================================

  return (
    <div className="max-w-7xl mx-auto">

      {/* =====================================
          Header
      ===================================== */}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Manage Projects
          </h1>

          <p className="text-gray-500 mt-2">
            Add, edit and manage your portfolio projects.
          </p>
        </div>

        <Link
          to="/dashboard/projects/add"
          className="
            inline-flex
            items-center
            gap-2
            bg-green-600
            hover:bg-green-700
            text-white
            px-5
            py-3
            rounded-lg
            font-semibold
            transition
          "
        >
          <FaPlus />
          Add Project
        </Link>
      </div>

      {/* =====================================
          Empty State
      ===================================== */}

      {projects.length === 0 ? (
        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            shadow-sm
            p-10
            text-center
          "
        >
          <h2 className="text-xl font-semibold text-gray-700">
            No Projects Found
          </h2>

          <p className="text-gray-500 mt-2 mb-6">
            You haven't added any projects yet.
          </p>

          <Link
            to="/dashboard/projects/add"
            className="
              inline-flex
              items-center
              gap-2
              bg-green-600
              hover:bg-green-700
              text-white
              px-5
              py-3
              rounded-lg
              font-semibold
            "
          >
            <FaPlus />
            Add Your First Project
          </Link>
        </div>
      ) : (
        <>
          {/* =====================================
              Desktop Table
          ===================================== */}

          <div className="hidden md:block">

            <div
              className="
                bg-white
                rounded-2xl
                shadow-md
                border
                border-gray-200
                overflow-hidden
              "
            >
              <div className="overflow-x-auto">

                <table className="w-full">

                  {/* Table Header */}

                  <thead className="bg-gray-50 border-b">
                    <tr>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Project
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Category
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Year
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        Technologies
                      </th>

                      <th className="text-center px-6 py-4 text-sm font-semibold text-gray-600">
                        Actions
                      </th>

                    </tr>
                  </thead>

                  {/* Table Body */}

                  <tbody>

                    {projects.map((project) => (

                      <tr
                        key={project._id}
                        className="
                          border-b
                          last:border-b-0
                          hover:bg-gray-50
                          transition
                        "
                      >

                        {/* Project */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-4">

                            {project.image ? (
                              <img
                                src={project.image}
                                alt={project.title}
                                className="
                                  w-16
                                  h-16
                                  rounded-lg
                                  object-cover
                                  border
                                "
                              />
                            ) : (
                              <div
                                className="
                                  w-16
                                  h-16
                                  rounded-lg
                                  bg-gray-100
                                  flex
                                  items-center
                                  justify-center
                                  text-gray-400
                                  text-xs
                                "
                              >
                                No Image
                              </div>
                            )}

                            <div>

                              <h3 className="font-semibold text-gray-800">
                                {project.title || "Untitled Project"}
                              </h3>

                              <p className="text-sm text-gray-500 max-w-xs truncate">
                                {project.description ||
                                  "No description"}
                              </p>

                            </div>

                          </div>

                        </td>

                        {/* Category */}

                        <td className="px-6 py-5">

                          <span
                            className="
                              inline-block
                              px-3
                              py-1
                              rounded-full
                              bg-green-100
                              text-green-700
                              text-sm
                              font-medium
                            "
                          >
                            {project.category || "N/A"}
                          </span>

                        </td>

                        {/* Year */}

                        <td className="px-6 py-5 text-gray-600">
                          {project.year || "N/A"}
                        </td>

                        {/* Technologies */}

                        <td className="px-6 py-5">

                          <div className="flex flex-wrap gap-1 max-w-xs">

                            {Array.isArray(
                              project.technologies
                            ) &&
                            project.technologies.length > 0 ? (
                              project.technologies
                                .slice(0, 3)
                                .map(
                                  (technology, index) => (
                                    <span
                                      key={index}
                                      className="
                                        px-2
                                        py-1
                                        bg-gray-100
                                        text-gray-600
                                        rounded
                                        text-xs
                                      "
                                    >
                                      {technology}
                                    </span>
                                  )
                                )
                            ) : (
                              <span className="text-gray-400 text-sm">
                                N/A
                              </span>
                            )}

                            {Array.isArray(
                              project.technologies
                            ) &&
                              project.technologies.length >
                                3 && (
                                <span className="text-xs text-gray-400">
                                  +
                                  {project.technologies.length -
                                    3}
                                </span>
                              )}

                          </div>

                        </td>

                        {/* Actions */}

                        <td className="px-6 py-5">

                          <div className="flex justify-center items-center gap-2">

                            {/* GitHub */}

                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  p-2
                                  rounded-lg
                                  bg-gray-100
                                  hover:bg-gray-200
                                  text-gray-700
                                "
                                title="GitHub"
                              >
                                <FaGithub />
                              </a>
                            )}

                            {/* Live Project */}

                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  p-2
                                  rounded-lg
                                  bg-blue-100
                                  hover:bg-blue-200
                                  text-blue-600
                                "
                                title="Live Project"
                              >
                                <FaExternalLinkAlt />
                              </a>
                            )}

                            {/* Edit */}

                            <Link
                              to={`/dashboard/projects/edit/${project._id}`}
                              className="
                                p-2
                                rounded-lg
                                bg-yellow-100
                                hover:bg-yellow-200
                                text-yellow-700
                              "
                              title="Edit Project"
                            >
                              <FaEdit />
                            </Link>

                            {/* Delete */}

                            <button
                              onClick={() =>
                                handleDelete(
                                  project._id
                                )
                              }
                              disabled={
                                deletingId ===
                                project._id
                              }
                              className="
                                p-2
                                rounded-lg
                                bg-red-100
                                hover:bg-red-200
                                text-red-600
                                disabled:opacity-50
                              "
                              title="Delete Project"
                            >
                              {deletingId ===
                              project._id ? (
                                <span className="loading loading-spinner loading-xs"></span>
                              ) : (
                                <FaTrash />
                              )}
                            </button>

                          </div>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>
            </div>

          </div>

          {/* =====================================
              Mobile Cards
          ===================================== */}

          <div className="grid grid-cols-1 gap-5 md:hidden">

            {projects.map((project) => (

              <div
                key={project._id}
                className="
                  bg-white
                  rounded-2xl
                  border
                  border-gray-200
                  shadow-md
                  overflow-hidden
                "
              >

                {/* Image */}

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-48
                      object-cover
                    "
                  />
                ) : (
                  <div
                    className="
                      w-full
                      h-48
                      bg-gray-100
                      flex
                      items-center
                      justify-center
                      text-gray-400
                    "
                  >
                    No Image
                  </div>
                )}

                <div className="p-5">

                  {/* Title */}

                  <h2 className="text-xl font-bold text-gray-800">
                    {project.title ||
                      "Untitled Project"}
                  </h2>

                  {/* Description */}

                  <p className="text-sm text-gray-500 mt-2">
                    {project.description ||
                      "No description"}
                  </p>

                  {/* Category + Year */}

                  <div className="flex flex-wrap gap-2 mt-4">

                    {project.category && (
                      <span
                        className="
                          px-3
                          py-1
                          bg-green-100
                          text-green-700
                          rounded-full
                          text-xs
                          font-medium
                        "
                      >
                        {project.category}
                      </span>
                    )}

                    {project.year && (
                      <span
                        className="
                          px-3
                          py-1
                          bg-gray-100
                          text-gray-600
                          rounded-full
                          text-xs
                        "
                      >
                        {project.year}
                      </span>
                    )}

                  </div>

                  {/* Technologies */}

                  {Array.isArray(
                    project.technologies
                  ) &&
                    project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">

                        {project.technologies.map(
                          (technology, index) => (
                            <span
                              key={index}
                              className="
                                px-2
                                py-1
                                bg-gray-100
                                text-gray-600
                                rounded
                                text-xs
                              "
                            >
                              {technology}
                            </span>
                          )
                        )}

                      </div>
                    )}

                  {/* Actions */}

                  <div className="flex items-center gap-2 mt-5">

                    {/* GitHub */}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          px-3
                          py-2
                          bg-gray-100
                          rounded-lg
                          text-sm
                        "
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {/* Live */}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          px-3
                          py-2
                          bg-blue-100
                          text-blue-600
                          rounded-lg
                          text-sm
                        "
                      >
                        <FaExternalLinkAlt />
                        Live
                      </a>
                    )}

                    {/* Edit */}

                    <Link
                      to={`/dashboard/projects/edit/${project._id}`}
                      className="
                        ml-auto
                        p-2
                        bg-yellow-100
                        text-yellow-700
                        rounded-lg
                      "
                      title="Edit Project"
                    >
                      <FaEdit />
                    </Link>

                    {/* Delete */}

                    <button
                      onClick={() =>
                        handleDelete(project._id)
                      }
                      disabled={
                        deletingId === project._id
                      }
                      className="
                        p-2
                        bg-red-100
                        text-red-600
                        rounded-lg
                        disabled:opacity-50
                      "
                      title="Delete Project"
                    >
                      {deletingId === project._id ? (
                        <span className="loading loading-spinner loading-xs"></span>
                      ) : (
                        <FaTrash />
                      )}
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        </>
      )}

    </div>
  );
};

export default ProjectManage;