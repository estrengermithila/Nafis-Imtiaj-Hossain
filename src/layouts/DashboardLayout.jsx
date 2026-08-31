import { Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

import { auth } from "../firebase/firebase.config";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Firebase থেকে logout
      await signOut(auth);

      // Local storage clear
      localStorage.removeItem("admin");
      localStorage.removeItem("adminToken");

      // Login page-এ পাঠানো
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="p-8">
          {/* Temporary Logout Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;