import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("adminToken");

  // Token না থাকলে login page-এ পাঠাবে
  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  // Token থাকলে requested page দেখাবে
  return <Outlet />;
};

export default ProtectedRoute;