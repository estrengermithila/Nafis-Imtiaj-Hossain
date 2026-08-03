const RecentActivities = () => {
  const activities = [
    "Added a new Project",
    "Updated Research Paper",
    "Edited Profile Information",
    "Uploaded Publication",
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Recent Activities
      </h2>

      <div className="space-y-4">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="border rounded-lg p-4"
          >
            {activity}
          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentActivities;