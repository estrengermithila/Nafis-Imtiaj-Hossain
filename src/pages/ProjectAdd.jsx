import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosPublic from "../api/axios";
import { FaPlus } from "react-icons/fa";

const ProjectAdd = () => {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    description: "",
    image: "",
    technologies: "",
    github: "",
    liveLink: "",
    category: "",
    year: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const projectData = {
        ...project,

        technologies: project.technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      await axiosPublic.post(
        "/project",
        projectData
      );

      alert("Project added successfully!");

      navigate("/dashboard/projects");

    } catch (error) {
      console.error(
        "Project add error:",
        error
      );

      alert(
        error?.response?.data?.message ||
        "Failed to add project"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Add Project
        </h1>

        <p className="text-gray-500 mt-2">
          Add a new project to your portfolio.
        </p>
      </div>


      <form
        onSubmit={handleSubmit}
        className="
          bg-white
          p-6
          sm:p-8
          rounded-2xl
          shadow-md
          border
          border-gray-200
          space-y-5
        "
      >

        {/* Title */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Project Title
          </label>

          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            placeholder="Plant Disease Detection System"
            className="input input-bordered w-full"
            required
          />
        </div>


        {/* Category */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Category
          </label>

          <input
            type="text"
            name="category"
            value={project.category}
            onChange={handleChange}
            placeholder="Research / Web Development / AI"
            className="input input-bordered w-full"
          />
        </div>


        {/* Year */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Year
          </label>

          <input
            type="text"
            name="year"
            value={project.year}
            onChange={handleChange}
            placeholder="2026"
            className="input input-bordered w-full"
          />
        </div>


        {/* Image */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Project Image URL
          </label>

          <input
            type="url"
            name="image"
            value={project.image}
            onChange={handleChange}
            placeholder="https://..."
            className="input input-bordered w-full"
          />
        </div>


        {/* Technologies */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Technologies
          </label>

          <input
            type="text"
            name="technologies"
            value={project.technologies}
            onChange={handleChange}
            placeholder="React, Node.js, MongoDB, Tailwind"
            className="input input-bordered w-full"
          />

          <p className="text-sm text-gray-400 mt-1">
            Separate technologies with commas.
          </p>
        </div>


        {/* GitHub */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            GitHub URL
          </label>

          <input
            type="url"
            name="github"
            value={project.github}
            onChange={handleChange}
            placeholder="https://github.com/..."
            className="input input-bordered w-full"
          />
        </div>


        {/* Live Link */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Live Project URL
          </label>

          <input
            type="url"
            name="liveLink"
            value={project.liveLink}
            onChange={handleChange}
            placeholder="https://..."
            className="input input-bordered w-full"
          />
        </div>


        {/* Description */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Description
          </label>

          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="Describe your project..."
            className="
              textarea
              textarea-bordered
              w-full
              h-36
            "
          />
        </div>


        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className="
            inline-flex
            items-center
            gap-2
            bg-green-600
            hover:bg-green-700
            disabled:bg-gray-400
            text-white
            px-7
            py-3
            rounded-lg
            font-semibold
            transition
          "
        >

          <FaPlus />

          {loading
            ? "Adding..."
            : "Add Project"
          }

        </button>

      </form>

    </div>
  );
};

export default ProjectAdd;