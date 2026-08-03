import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosPublic from "../../api/axios";

const ExperienceAdd = () => {
  const navigate = useNavigate();

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    duration: "",
    description: "",
    location: "",
    technologies: "",
  });

  const [loading, setLoading] = useState(false);

  // =========================
  // Handle Input Change
  // =========================
  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // Handle Submit
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const experienceData = {
        company: experience.company.trim(),
        position: experience.position.trim(),
        duration: experience.duration.trim(),
        description: experience.description.trim(),
        location: experience.location.trim(),

        technologies: experience.technologies
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      };

      const res = await axiosPublic.post(
        "/experience",
        experienceData
      );

      console.log("Experience added:", res.data);

      alert("Experience added successfully!");

      // Form reset
      setExperience({
        company: "",
        position: "",
        duration: "",
        description: "",
        location: "",
        technologies: "",
      });

      // Go back to Experience Management
      navigate("/dashboard/experience");

    } catch (error) {
      console.error("Add experience error:", error);

      alert(
        error?.response?.data?.message ||
        "Failed to add experience"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Add Experience
        </h1>

        <p className="text-gray-500 mt-2">
          Add a new professional experience to your portfolio.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          shadow-sm
          p-6
          sm:p-8
          space-y-5
        "
      >

        {/* Company */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company / Organization
          </label>

          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={handleChange}
            placeholder="International Centre for Climate Change and Development"
            className="
              w-full
              border
              border-gray-300
              rounded-lg
              px-4
              py-3
              outline-none
              focus:border-green-500
              focus:ring-2
              focus:ring-green-100
            "
            required
          />
        </div>

        {/* Position */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Position
          </label>

          <input
            type="text"
            name="position"
            value={experience.position}
            onChange={handleChange}
            placeholder="Research Assistant"
            className="
              w-full
              border
              border-gray-300
              rounded-lg
              px-4
              py-3
              outline-none
              focus:border-green-500
              focus:ring-2
              focus:ring-green-100
            "
            required
          />
        </div>

        {/* Duration + Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Duration
            </label>

            <input
              type="text"
              name="duration"
              value={experience.duration}
              onChange={handleChange}
              placeholder="Jun 2025 - Present"
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                px-4
                py-3
                outline-none
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
              "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={experience.location}
              onChange={handleChange}
              placeholder="Dhaka, Bangladesh"
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                px-4
                py-3
                outline-none
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
              "
            />
          </div>

        </div>

        {/* Technologies */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Technologies / Skills
          </label>

          <input
            type="text"
            name="technologies"
            value={experience.technologies}
            onChange={handleChange}
            placeholder="GIS, Remote Sensing, Python, SPSS"
            className="
              w-full
              border
              border-gray-300
              rounded-lg
              px-4
              py-3
              outline-none
              focus:border-green-500
              focus:ring-2
              focus:ring-green-100
            "
          />

          <p className="text-xs text-gray-400 mt-2">
            Separate multiple skills with commas.
          </p>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>

          <textarea
            name="description"
            value={experience.description}
            onChange={handleChange}
            placeholder="Describe your responsibilities, research work, achievements..."
            className="
              w-full
              min-h-[150px]
              border
              border-gray-300
              rounded-lg
              px-4
              py-3
              outline-none
              resize-y
              focus:border-green-500
              focus:ring-2
              focus:ring-green-100
            "
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-3">

          <button
            type="submit"
            disabled={loading}
            className="
              flex-1
              bg-lime-400
              hover:bg-lime-500
              disabled:bg-gray-300
              disabled:cursor-not-allowed
              text-[#071426]
              px-6
              py-3
              rounded-lg
              font-semibold
              transition
            "
          >
            {loading ? "Adding Experience..." : "Add Experience"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/dashboard/experience")}
            className="
              px-6
              py-3
              rounded-lg
              border
              border-gray-300
              text-gray-700
              hover:bg-gray-100
              font-semibold
              transition
            "
          >
            Cancel
          </button>

        </div>

      </form>
    </div>
  );
};

export default ExperienceAdd;