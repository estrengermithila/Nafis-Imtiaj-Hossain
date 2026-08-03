import { useState } from "react";

const PersonalInfo = () => {

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    university: "",
    department: "",
    email: "",
    phone: "",
    address: "",
    about: "",
    github: "",
    linkedin: "",
    facebook: "",
    website: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    alert("Profile Saved Successfully");

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 space-y-6"
    >

      <h2 className="text-2xl font-bold">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none"
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none"
        />

        <input
          type="text"
          name="university"
          placeholder="University"
          value={formData.university}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none"
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none"
        />

      </div>

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="border rounded-lg p-3 w-full outline-none"
      />

      <textarea
        rows="5"
        name="about"
        placeholder="About Yourself"
        value={formData.about}
        onChange={handleChange}
        className="border rounded-lg p-3 w-full outline-none"
      />

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          name="github"
          placeholder="GitHub URL"
          value={formData.github}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none"
        />

        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={formData.linkedin}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none"
        />

        <input
          type="text"
          name="facebook"
          placeholder="Facebook URL"
          value={formData.facebook}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none"
        />

        <input
          type="text"
          name="website"
          placeholder="Portfolio Website"
          value={formData.website}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none"
        />

      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
      >
        Save Profile
      </button>

    </form>

  );
};

export default PersonalInfo;