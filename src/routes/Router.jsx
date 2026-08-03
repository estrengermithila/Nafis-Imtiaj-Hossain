import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLogin from "../layouts/AdminLogin";
import DashboardLayout from "../layouts/DashboardLayout";

import DashboardHome from "../pages/DashboardHome";
import Profile from "../pages/Profile";

// Public Experience

// Admin Experience

import Research from "../pages/Research";
import Projects from "../pages/Projects";
import Publications from "../pages/Publications";
import Gallery from "../pages/Gallery";
import Messages from "../pages/Messages";
import Settings from "../pages/Settings";
import ExperienceManage from "../components/Experience/ExperienceManage";
import ExperienceAdd from "../pages/admin/ExperienceAdd";


const router = createBrowserRouter([
  // =====================================
  // Public Website
  // =====================================

  {
    path: "/",
    element: <MainLayout />,
  },


  // =====================================
  // Admin Login
  // =====================================

  {
    path: "/admin/login",
    element: <AdminLogin />,
  },


  // =====================================
  // Admin Dashboard
  // =====================================

  {
    path: "/dashboard",

    element: <DashboardLayout />,

    children: [

      // Dashboard Home
      {
        index: true,
        element: <DashboardHome />,
      },


      // Profile
      {
        path: "profile",
        element: <Profile />,
      },


      // =====================================
      // Experience
      // =====================================

      // Experience Management
      {
        path: "experience",
        element: <ExperienceManage />,
      },


      // Add Experience
      {
        path: "experience/add",
        element: <ExperienceAdd />,
      },


      // =====================================
      // Other Dashboard Pages
      // =====================================

      {
        path: "research",
        element: <Research />,
      },


      {
        path: "projects",
        element: <Projects />,
      },


      {
        path: "publications",
        element: <Publications />,
      },


      {
        path: "gallery",
        element: <Gallery />,
      },


      {
        path: "messages",
        element: <Messages />,
      },


      {
        path: "settings",
        element: <Settings />,
      },

    ],
  },
]);


export default router;