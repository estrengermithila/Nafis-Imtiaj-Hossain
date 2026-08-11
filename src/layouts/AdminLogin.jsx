
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://nafis-imtiaj-hossain-server-opal.vercel.app/api/auth/login",
        formData
      );

      console.log("LOGIN RESPONSE:", response.data);

      if (response.data.success) {
        // Save JWT Token
        localStorage.setItem(
          "adminToken",
          response.data.token
        );

        // Save Admin Info
        localStorage.setItem(
          "admin",
          JSON.stringify(response.data.admin)
        );

        console.log(
          "SAVED TOKEN:",
          localStorage.getItem("adminToken")
        );

        // Go Dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(
        "LOGIN ERROR:",
        error.response?.data || error
      );

      setError(
        error.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Login
        </h1>

        <p className="text-gray-500 mt-2">
          Login to your portfolio dashboard
        </p>
      </div>

      {error && (
        <div className="mb-5 p-3 rounded-lg bg-red-100 text-red-600">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Email */}

        <div>
          <label className="block mb-2 text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="admin@gmail.com"
            required
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}

        <div>
          <label className="block mb-2 text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Login Button */}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

