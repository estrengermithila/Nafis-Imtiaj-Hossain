
const CVUpload = ({ profileData, setProfileData }) => {
  const handleCVChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Only PDF
    if (file.type !== "application/pdf") {
      alert("Only PDF file is allowed.");
      e.target.value = "";
      return;
    }

    // File size limit: 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert("CV size must be less than 5MB.");
      e.target.value = "";
      return;
    }

    setProfileData((prev) => ({
      ...prev,
      cv: file,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-5">
        Upload CV
      </h2>

      <input
        type="file"
        accept="application/pdf,.pdf"
        onChange={handleCVChange}
        className="file-input file-input-bordered w-full"
      />

      {profileData?.cv && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold text-gray-700">
            Selected CV:
          </p>

          <p className="text-sm text-gray-600 mt-1 break-all">
            {profileData.cv instanceof File
              ? profileData.cv.name
              : "Current CV uploaded"}
          </p>
        </div>
      )}
    </div>
  );
};

export default CVUpload;

