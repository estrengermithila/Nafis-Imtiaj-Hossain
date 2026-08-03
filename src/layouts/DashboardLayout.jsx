import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";



const DashboardLayout = () => {
  return (
    <div className="flex bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <DashboardNavbar />

        <main className="p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;