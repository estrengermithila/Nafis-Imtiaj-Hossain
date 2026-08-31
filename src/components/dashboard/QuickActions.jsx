import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {/* Add Project */}
        <Link
          to="/dashboard/projects/add"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 text-center transition"
        >
          + Add Project
        </Link>

        {/* Add Research */}
        <Link
          to="/dashboard/research"
          className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 text-center transition"
        >
          + Add Research
        </Link>

        {/* Update Profile */}
        <Link
          to="/dashboard/profile"
          className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 text-center transition"
        >
          Update Profile
        </Link>

      </div>
    </div>
  );
};

export default QuickActions;