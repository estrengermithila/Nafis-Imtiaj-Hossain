const QuickActions = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          + Add Project
        </button>

        <button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          + Add Research
        </button>

        <button className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
          Update Profile
        </button>

      </div>

    </div>
  );
};

export default QuickActions;