
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

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
    const result = await signInWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    const user = result.user;

    console.log("FIREBASE USER:", user);

    // Admin email
   const adminEmail = "mithilafarjanam20@gmail.com";

    // Check admin
    if (user.email !== adminEmail) {
      setError("You are not authorized as an admin.");

      await auth.signOut();

      return;
    }

    // Save admin information
    localStorage.setItem(
      "admin",
      JSON.stringify({
        uid: user.uid,
        email: user.email,
      })
    );

    // Save Firebase ID Token
    const token = await user.getIdToken();

    localStorage.setItem("adminToken", token);

    console.log("ADMIN LOGIN SUCCESS");

    // Go Dashboard
    navigate("/dashboard");

  } catch (error) {
    console.log("LOGIN ERROR:", error);

    if (error.code === "auth/invalid-credential") {
      setError("Invalid email or password.");
    } else if (error.code === "auth/user-not-found") {
      setError("Admin account not found.");
    } else if (error.code === "auth/wrong-password") {
      setError("Wrong password.");
    } else {
      setError("Login failed. Please try again.");
    }
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

