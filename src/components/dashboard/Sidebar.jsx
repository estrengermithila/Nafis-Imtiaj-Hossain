import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaBookOpen,
  FaImages,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaFlask,
  FaGraduationCap,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase/firebase.config";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: <FaUser />,
  },
  {
    title: "Experience",
    path: "/dashboard/experience",
    icon: <FaBriefcase />,
  },
  {
    title: "Research",
    path: "/dashboard/research",
    icon: <FaFlask />,
  },
  {
    title: "Projects",
    path: "/dashboard/projects",
    icon: <FaProjectDiagram />,
  },
  { title: "Education", path: "/dashboard/education", icon: <FaGraduationCap />, },
  // {
  //   title: "Publications",
  //   path: "/dashboard/publications",
  //   icon: <FaBookOpen />,
  // },
  // {
  //   title: "Gallery",
  //   path: "/dashboard/gallery",
  //   icon: <FaImages />,
  // },
  {
    title: "Messages",
    path: "/dashboard/messages",
    icon: <FaEnvelope />,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <FaCog />,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Firebase logout
      await signOut(auth);

      // Clear saved admin information
      localStorage.removeItem("admin");
      localStorage.removeItem("adminToken");

      // Go to admin login
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white shadow-lg">
      
      {/* Logo / Title */}
      <div className="py-8 border-b border-slate-700 text-center">
        <h2 className="text-2xl font-bold">
          Admin Dashboard
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          Nafis Portfolio
        </p>
      </div>

      {/* Menu */}
      <div className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 transition-all
              ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <div className="absolute bottom-0 w-72 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 px-6 py-5 w-full hover:bg-red-600 duration-300"
        >
          <FaSignOutAlt />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;