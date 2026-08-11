import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLogin from "../layouts/AdminLogin";
import DashboardLayout from "../layouts/DashboardLayout";

// Dashboard Pages
import DashboardHome from "../pages/DashboardHome";
import Profile from "../pages/Profile";
import Research from "../pages/Research";
import Publications from "../pages/Publications";
import Gallery from "../pages/Gallery";
import Messages from "../pages/Messages";
import Settings from "../pages/Settings";

// Experience
import ExperienceManage from "../components/Experience/ExperienceManage";
import ExperienceAdd from "../pages/admin/ExperienceAdd";

// Projects
import ProjectManage from "../components/Projects/ProjectManage";
import ProjectAdd from "../pages/ProjectAdd";

// Contact
import ContactManage from "../components/dashboard/ContactManage";

// =====================================
// Router
// =====================================

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
    path: "/admin",
    element: <AdminLogin />,
  },

  {
    path: "/admin/login",
    element: <AdminLogin />,
  },

  // =====================================
  // Protected Admin Dashboard
  // =====================================

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

    // Experience
    {
      path: "experience",
      element: <ExperienceManage />,
    },

    {
      path: "experience/add",
      element: <ExperienceAdd />,
    },

    // Projects
    {
      path: "projects",
      element: <ProjectManage />,
    },

    {
      path: "projects/add",
      element: <ProjectAdd />,
    },

    // Contact
    {
      path: "contacts",
      element: <ContactManage />,
    },

    // Research
    {
      path: "research",
      element: <Research />,
    },

    // Publications
    {
      path: "publications",
      element: <Publications />,
    },

    // Gallery
    {
      path: "gallery",
      element: <Gallery />,
    },

    // Messages
    {
      path: "messages",
      element: <Messages />,
    },

    // Settings
    {
      path: "settings",
      element: <Settings />,
    },
  ],
},
]);

export default router;