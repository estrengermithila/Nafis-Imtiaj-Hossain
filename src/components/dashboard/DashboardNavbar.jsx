import { FaBell, FaUserCircle } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <header className="h-20 bg-white shadow flex items-center justify-between px-8">

      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <div className="flex items-center gap-6">

        <button className="text-2xl">
          <FaBell />
        </button>

        <div className="flex items-center gap-2">

          <FaUserCircle className="text-3xl" />

          <div>
            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-xs text-gray-500">
              Researcher
            </p>
          </div>

        </div>

      </div>

    </header>
  );
};

export default DashboardNavbar;