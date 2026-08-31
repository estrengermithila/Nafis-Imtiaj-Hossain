import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosPublic from "../api/axios";
import { FaSave, FaArrowLeft } from "react-icons/fa";

const ProjectEdit = () => {
  const { id } = useParams();
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

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // ==============================
  // Fetch Single Project
  // ==============================
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);

        const res = await axiosPublic.get(`/project/${id}`);

        const data = res.data.data;

        setProject({
          title: data.title || "",
          description: data.description || "",
          image: data.image || "",
          technologies: Array.isArray(data.technologies)
            ? data.technologies.join(", ")
            : "",
          github: data.github || "",
          liveLink: data.liveLink || "",
          category: data.category || "",
          year: data.year || "",
        });
      } catch (error) {
        console.error("Fetch project error:", error);

        alert(
          error?.response?.data?.message ||
            "Failed to load project"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  // ==============================
  // Handle Input Change
  // ==============================
  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // ==============================
  // Update Project
  // ==============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      const projectData = {
        ...project,

        technologies: project.technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      const res = await axiosPublic.patch(
        `/project/${id}`,
        projectData
      );

      console.log("Updated project:", res.data);

      alert("Project updated successfully!");

      // Manage Projects page এ ফিরে যাবে
      navigate("/dashboard/projects");
    } catch (error) {
      console.error("Project update error:", error);

      alert(
        error?.response?.data?.message ||
          "Failed to update project"
      );
    } finally {
      setUpdating(false);
    }
  };

  // ==============================
  // Loading
  // ==============================
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  // ==============================
  // UI
  // ==============================
  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8">
        <button
          onClick={() => navigate("/dashboard/projects")}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 mb-4"
        >
          <FaArrowLeft />
          Back to Projects
        </button>

        <h1 className="text-3xl font-bold text-slate-900">
          Edit Project
        </h1>

        <p className="text-gray-500 mt-2">
          Update your portfolio project information.
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
          disabled={updating}
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
          <FaSave />

          {updating ? "Updating..." : "Update Project"}
        </button>
      </form>
    </div>
  );
};

export default ProjectEdit;