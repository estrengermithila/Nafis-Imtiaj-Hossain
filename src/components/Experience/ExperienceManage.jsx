import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosPublic from "../../api/axios";

const ExperienceManage = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // =========================
  // Get All Experiences
  // =========================
  const fetchExperiences = async () => {
    try {
      setLoading(true);

      const res = await axiosPublic.get("/experience");

      setExperiences(res.data.data || []);
    } catch (error) {
      console.error("Failed to fetch experiences:", error);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Fetch Experiences on Page Load
  // =========================
  useEffect(() => {
    fetchExperiences();
  }, []);

  // =========================
  // Delete Experience
  // =========================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this experience?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeletingId(id);

      await axiosPublic.delete(`/experience/${id}`);

      // Remove deleted experience immediately
      setExperiences((prevExperiences) =>
        prevExperiences.filter(
          (experience) => experience._id !== id
        )
      );

      alert("Experience deleted successfully");
    } catch (error) {
      console.error("Delete experience error:", error);

      alert(
        error?.response?.data?.message ||
          "Failed to delete experience"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // =========================
  // Loading
  // =========================
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-lg font-semibold text-gray-600">
          Loading experiences...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* =========================
          Header
      ========================= */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
          mb-8
        "
      >
        <div>
          <h1
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-slate-900
            "
          >
            Experience Management
          </h1>

          <p className="text-gray-500 mt-2">
            Add, edit or delete your professional experiences.
          </p>
        </div>

        {/* Add Experience */}
        <Link
          to="/dashboard/experience/add"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            bg-lime-400
            hover:bg-lime-500
            text-[#071426]
            font-semibold
            px-5
            py-3
            rounded-lg
            transition
            duration-300
            shadow-md
          "
        >
          <FaPlus />
          Add Experience
        </Link>
      </div>

      {/* =========================
          Empty State
      ========================= */}
      {experiences.length === 0 ? (
        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-10
            text-center
            shadow-sm
          "
        >
          <FaBriefcase
            className="
              text-5xl
              text-gray-300
              mx-auto
              mb-4
            "
          />

          <h2 className="text-xl font-semibold text-gray-700">
            No Experience Found
          </h2>

          <p className="text-gray-500 mt-2 mb-6">
            Add your first professional experience.
          </p>

          <Link
            to="/dashboard/experience/add"
            className="
              inline-flex
              items-center
              gap-2
              bg-lime-400
              hover:bg-lime-500
              text-[#071426]
              font-semibold
              px-5
              py-3
              rounded-lg
            "
          >
            <FaPlus />
            Add Experience
          </Link>
        </div>
      ) : (
        /* =========================
           Experience List
        ========================= */
        <div className="grid grid-cols-1 gap-6">

          {experiences.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                shadow-sm
                hover:shadow-lg
                transition
                duration-300
                overflow-hidden
              "
            >

              {/* Top Gradient */}
              <div
                className="
                  h-1
                  w-full
                  bg-gradient-to-r
                  from-lime-400
                  via-green-400
                  to-cyan-400
                "
              />

              <div className="p-5 sm:p-7">

                {/* Header */}
                <div
                  className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                    gap-5
                  "
                >

                  <div className="flex gap-4">

                    {/* Icon */}
                    <div
                      className="
                        hidden
                        sm:flex
                        w-12
                        h-12
                        shrink-0
                        rounded-xl
                        bg-green-100
                        text-green-600
                        items-center
                        justify-center
                      "
                    >
                      <FaBriefcase />
                    </div>

                    {/* Main Info */}
                    <div>

                      <h2
                        className="
                          text-xl
                          sm:text-2xl
                          font-bold
                          text-slate-900
                        "
                      >
                        {item.position}
                      </h2>

                      <div
                        className="
                          flex
                          items-start
                          gap-2
                          mt-2
                          text-green-600
                          font-semibold
                        "
                      >
                        <FaBuilding className="mt-1 shrink-0" />

                        <span>{item.company}</span>
                      </div>

                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 shrink-0">

                    {/* Edit */}
                    <Link
                      to={`/dashboard/experience/edit/${item._id}`}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-lg
                        bg-blue-50
                        text-blue-600
                        hover:bg-blue-600
                        hover:text-white
                        transition
                        duration-300
                        font-medium
                      "
                    >
                      <FaEdit />
                      Edit
                    </Link>

                    {/* Delete */}
                    <button
                      type="button"
                      disabled={deletingId === item._id}
                      onClick={() => handleDelete(item._id)}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-lg
                        bg-red-50
                        text-red-600
                        hover:bg-red-600
                        hover:text-white
                        transition
                        duration-300
                        font-medium
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                      "
                    >
                      <FaTrash />

                      {deletingId === item._id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div
                  className="
                    mt-6
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-4
                  "
                >

                  {/* Duration */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      text-gray-600
                    "
                  >
                    <FaCalendarAlt className="text-cyan-500" />

                    <span>{item.duration}</span>
                  </div>

                  {/* Location */}
                  {item.location && (
                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        text-gray-600
                      "
                    >
                      <FaMapMarkerAlt className="text-red-400" />

                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {item.description && (
                  <p
                    className="
                      mt-5
                      text-gray-600
                      leading-7
                    "
                  >
                    {item.description}
                  </p>
                )}

                {/* Technologies */}
                {item.technologies?.length > 0 && (
                  <div className="mt-5">

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-gray-700
                        mb-3
                      "
                    >
                      Technologies / Skills
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {item.technologies.map(
                        (technology, techIndex) => (
                          <span
                            key={`${technology}-${techIndex}`}
                            className="
                              px-3
                              py-1
                              rounded-full
                              bg-green-100
                              text-green-700
                              text-sm
                              font-medium
                            "
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceManage;