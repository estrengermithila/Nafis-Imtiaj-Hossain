
import { useEffect, useState } from "react";
import axiosPublic from "../../api/axios";

import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaGraduationCap,
} from "react-icons/fa";

const initialFormData = {
  degree: "",
  institution: "",
  field: "",
  startYear: "",
  endYear: "",
  description: "",
};

const EducationManage = () => {
  const [education, setEducation] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const [profileId, setProfileId] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  // =====================================
  // Fetch Profile / Education
  // =====================================

  const fetchEducation = async () => {
    try {
      setLoading(true);

      const res = await axiosPublic.get("/profile");

      const profile = res.data?.data;

      if (!profile) {
        setEducation([]);
        return;
      }

      setProfileId(profile._id);

      setEducation(
        Array.isArray(profile.education)
          ? profile.education
          : []
      );
    } catch (error) {
      console.error("Fetch education error:", error);

      setEducation([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  // =====================================
  // Handle Input
  // =====================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================
  // Reset Form
  // =====================================

  const resetForm = () => {
    setFormData(initialFormData);
    setEditingId(null);
  };

  // =====================================
  // Add / Update Education
  // =====================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!profileId) {
      alert("Profile not found!");
      return;
    }

    try {
      setSaving(true);

      let updatedEducation;

      // =====================================
      // UPDATE
      // =====================================

      if (editingId) {
        updatedEducation = education.map((item) => {
          if (item._id === editingId) {
            return {
              ...item,
              ...formData,
            };
          }

          return item;
        });
      }

      // =====================================
      // ADD
      // =====================================

      else {
        // IMPORTANT:
        // এখানে manually _id দেওয়া যাবে না.
        // MongoDB/Mongoose automatically _id generate করবে.

        const newEducation = {
          ...formData,
        };

        updatedEducation = [
          ...education,
          newEducation,
        ];
      }

      // =====================================
      // Update Profile
      // =====================================

      const res = await axiosPublic.patch(
        `/profile/${profileId}`,
        {
          education: updatedEducation,
        }
      );

      // =====================================
      // Backend থেকে updated data
      // =====================================

      const updatedData =
        res.data?.data?.education || updatedEducation;

      setEducation(updatedData);

      resetForm();

      alert(
        editingId
          ? "Education updated successfully!"
          : "Education added successfully!"
      );
    } catch (error) {
      console.error(
        "Education save error:",
        error
      );

      alert(
        error?.response?.data?.message ||
          "Failed to save education"
      );
    } finally {
      setSaving(false);
    }
  };

  // =====================================
  // Edit
  // =====================================

  const handleEdit = (item) => {
    setEditingId(item._id);

    setFormData({
      degree: item.degree || "",
      institution: item.institution || "",
      field: item.field || "",
      startYear: item.startYear || "",
      endYear: item.endYear || "",
      description: item.description || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================
  // Delete
  // =====================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this education?"
    );

    if (!confirmDelete) return;

    if (!profileId) {
      alert("Profile not found!");
      return;
    }

    try {
      setDeletingId(id);

      const updatedEducation = education.filter(
        (item) => item._id !== id
      );

      const res = await axiosPublic.patch(
        `/profile/${profileId}`,
        {
          education: updatedEducation,
        }
      );

      const updatedData =
        res.data?.data?.education ||
        updatedEducation;

      // =====================================
      // Frontend immediately update
      // =====================================

      setEducation(updatedData);

      // যদি deleted item edit mode-এ থাকে
      if (editingId === id) {
        resetForm();
      }

      alert("Education deleted successfully!");
    } catch (error) {
      console.error(
        "Delete education error:",
        error
      );

      alert(
        error?.response?.data?.message ||
          "Failed to delete education"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // =====================================
  // Cancel Edit
  // =====================================

  const handleCancel = () => {
    resetForm();
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
  // UI
  // =====================================

  return (
    <div className="max-w-6xl mx-auto">

      {/* =====================================
          Header
      ===================================== */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Education Management
        </h1>

        <p className="text-gray-500 mt-2">
          Add, edit and manage your academic background.
        </p>
      </div>

      {/* =====================================
          Add / Edit Form
      ===================================== */}

      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 sm:p-8 mb-10">

        <div className="flex items-center gap-3 mb-6">

          <div className="p-3 bg-green-100 text-green-600 rounded-xl">
            <FaGraduationCap className="text-xl" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {editingId
                ? "Edit Education"
                : "Add Education"}
            </h2>

            <p className="text-sm text-gray-500">
              Add your academic background.
            </p>
          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Degree */}

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Degree
            </label>

            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              placeholder="Master of Science (Research)"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Institution */}

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Institution
            </label>

            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              placeholder="Bangladesh University of Engineering and Technology (BUET)"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Field */}

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Field of Study
            </label>

            <input
              type="text"
              name="field"
              value={formData.field}
              onChange={handleChange}
              placeholder="Water Resources Engineering"
              className="input input-bordered w-full"
            />
          </div>

          {/* Years */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Start Year
              </label>

              <input
                type="text"
                name="startYear"
                value={formData.startYear}
                onChange={handleChange}
                placeholder="2025"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                End Year
              </label>

              <input
                type="text"
                name="endYear"
                value={formData.endYear}
                onChange={handleChange}
                placeholder="Present"
                className="input input-bordered w-full"
              />
            </div>

          </div>

          {/* Description */}

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Currently pursuing an M.Sc. (Research) in Water Resources Engineering..."
              className="textarea textarea-bordered w-full h-32"
            />
          </div>

          {/* Buttons */}

          <div className="flex items-center gap-3">

            <button
              type="submit"
              disabled={saving}
              className="
                inline-flex
                items-center
                gap-2
                bg-green-600
                hover:bg-green-700
                disabled:bg-gray-400
                text-white
                px-6
                py-3
                rounded-lg
                font-semibold
                transition
              "
            >
              <FaPlus />

              {saving
                ? "Saving..."
                : editingId
                ? "Update Education"
                : "Add Education"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={handleCancel}
                className="
                  px-6
                  py-3
                  rounded-lg
                  bg-gray-200
                  hover:bg-gray-300
                  text-gray-700
                  font-semibold
                "
              >
                Cancel
              </button>
            )}

          </div>

        </form>
      </div>

      {/* =====================================
          Education List
      ===================================== */}

      <div>

        <h2 className="text-2xl font-bold text-slate-900 mb-5">
          My Academic Background
        </h2>

        {education.length === 0 ? (

          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">

            <FaGraduationCap className="text-4xl text-gray-300 mx-auto mb-3" />

            <p className="text-gray-500">
              No education added yet.
            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {education.map((item, index) => (

              <div
                key={item._id || `education-${index}`}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  shadow-sm
                  p-6
                  hover:shadow-md
                  transition
                "
              >

                <div className="flex flex-col sm:flex-row justify-between gap-5">

                  {/* Information */}

                  <div className="flex-1">

                    <h3 className="text-xl font-bold text-slate-900">
                      {item.degree}
                    </h3>

                    <h4 className="text-lg font-semibold text-green-600 mt-1">
                      {item.institution}
                    </h4>

                    {item.field && (
                      <p className="text-gray-700 mt-2 font-medium">
                        {item.field}
                      </p>
                    )}

                    {(item.startYear ||
                      item.endYear) && (
                      <p className="text-sm text-gray-500 mt-2">
                        {item.startYear} – {item.endYear}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-gray-600 mt-4 leading-7 whitespace-pre-line">
                        {item.description}
                      </p>
                    )}

                  </div>

                  {/* Actions */}

                  <div className="flex items-start gap-2">

                    {/* Edit */}

                    <button
                      onClick={() => handleEdit(item)}
                      className="
                        p-3
                        rounded-lg
                        bg-yellow-100
                        hover:bg-yellow-200
                        text-yellow-700
                      "
                      title="Edit"
                    >
                      <FaEdit />
                    </button>

                    {/* Delete */}

                    <button
                      onClick={() =>
                        handleDelete(item._id)
                      }
                      disabled={
                        deletingId === item._id
                      }
                      className="
                        p-3
                        rounded-lg
                        bg-red-100
                        hover:bg-red-200
                        text-red-600
                        disabled:opacity-50
                      "
                      title="Delete"
                    >
                      {deletingId === item._id ? (
                        <span className="loading loading-spinner loading-sm"></span>
                      ) : (
                        <FaTrash />
                      )}
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default EducationManage;

