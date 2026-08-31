import { useState } from "react";

const EducationSection = ({ profileData, setProfileData }) => {
  const [educationForm, setEducationForm] = useState({
    degree: "",
    institution: "",
    field: "",
    startYear: "",
    endYear: "",
    description: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  // =====================================
  // Handle Input
  // =====================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEducationForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================
  // Add / Update Education
  // =====================================

  const handleAddEducation = (e) => {
    e.preventDefault();

    // Check required fields
    if (
      !educationForm.degree.trim() ||
      !educationForm.institution.trim()
    ) {
      alert("Please enter Degree and Institution.");
      return;
    }

    if (editIndex !== null) {
      // Update existing education
      setProfileData((prev) => ({
        ...prev,
        education: prev.education.map((item, index) =>
          index === editIndex
            ? educationForm
            : item
        ),
      }));

      setEditIndex(null);
    } else {
      // Add new education
      setProfileData((prev) => ({
        ...prev,
        education: [
          ...(prev.education || []),
          educationForm,
        ],
      }));
    }

    // Clear form
    setEducationForm({
      degree: "",
      institution: "",
      field: "",
      startYear: "",
      endYear: "",
      description: "",
    });
  };

  // =====================================
  // Edit Education
  // =====================================

  const handleEdit = (index) => {
    setEducationForm(profileData.education[index]);
    setEditIndex(index);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  // =====================================
  // Delete Education
  // =====================================

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this education?"
    );

    if (!confirmDelete) return;

    setProfileData((prev) => ({
      ...prev,
      education: prev.education.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      {/* =====================================
          Title
      ===================================== */}

      <h2 className="text-xl font-bold mb-6">
        Education
      </h2>

      {/* =====================================
          Education Form
      ===================================== */}

      <form
        onSubmit={handleAddEducation}
        className="space-y-4"
      >

        {/* Degree */}

        <div>
          <label className="block font-semibold mb-1">
            Degree
          </label>

          <input
            type="text"
            name="degree"
            value={educationForm.degree}
            onChange={handleChange}
            placeholder="e.g. B.Sc. in Computer Science"
            className="input input-bordered w-full"
          />
        </div>

        {/* Institution */}

        <div>
          <label className="block font-semibold mb-1">
            Institution
          </label>

          <input
            type="text"
            name="institution"
            value={educationForm.institution}
            onChange={handleChange}
            placeholder="e.g. BUBT"
            className="input input-bordered w-full"
          />
        </div>

        {/* Field */}

        <div>
          <label className="block font-semibold mb-1">
            Field of Study
          </label>

          <input
            type="text"
            name="field"
            value={educationForm.field}
            onChange={handleChange}
            placeholder="e.g. Computer Science & Engineering"
            className="input input-bordered w-full"
          />
        </div>

        {/* Years */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block font-semibold mb-1">
              Start Year
            </label>

            <input
              type="text"
              name="startYear"
              value={educationForm.startYear}
              onChange={handleChange}
              placeholder="2022"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              End Year
            </label>

            <input
              type="text"
              name="endYear"
              value={educationForm.endYear}
              onChange={handleChange}
              placeholder="2026"
              className="input input-bordered w-full"
            />
          </div>

        </div>

        {/* Description */}

        <div>
          <label className="block font-semibold mb-1">
            Description
          </label>

          <textarea
            name="description"
            value={educationForm.description}
            onChange={handleChange}
            placeholder="Write something about your education..."
            rows="4"
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/* Add Button */}

        <button
          type="submit"
          className="btn btn-primary"
        >
          {editIndex !== null
            ? "Update Education"
            : "Add Education"}
        </button>

      </form>

      {/* =====================================
          Added Education List
      ===================================== */}

      {profileData?.education?.length > 0 && (
        <div className="mt-8">

          <h3 className="text-lg font-bold mb-4">
            Added Education
          </h3>

          <div className="space-y-4">

            {profileData.education.map(
              (education, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-5 bg-gray-50"
                >

                  <div className="flex justify-between items-start gap-4">

                    <div>

                      <h4 className="text-lg font-bold text-gray-800">
                        {education.degree}
                      </h4>

                      <p className="font-semibold text-gray-700 mt-1">
                        {education.institution}
                      </p>

                      {education.field && (
                        <p className="text-gray-600">
                          {education.field}
                        </p>
                      )}

                      {(education.startYear ||
                        education.endYear) && (
                        <p className="text-sm text-gray-500 mt-1">
                          {education.startYear} -{" "}
                          {education.endYear}
                        </p>
                      )}

                      {education.description && (
                        <p className="text-gray-600 mt-3">
                          {education.description}
                        </p>
                      )}

                    </div>

                    {/* Buttons */}

                    <div className="flex gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(index)
                        }
                        className="btn btn-sm btn-info"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(index)
                        }
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>
              )
            )}

          </div>

        </div>
      )}

    </div>
  );
};

export default EducationSection;