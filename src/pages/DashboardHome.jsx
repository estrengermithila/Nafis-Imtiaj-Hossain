import QuickActions from "../components/dashboard/QuickActions";
import RecentActivities from "../components/dashboard/RecentActivities";
import StatsCard from "../components/dashboard/StatsCard";


const DashboardHome = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your portfolio from here.
        </p>

      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <StatsCard
          title="Projects"
          value="12"
          color="border-blue-500"
        />

        <StatsCard
          title="Research"
          value="8"
          color="border-green-500"
        />

        <StatsCard
          title="Publications"
          value="15"
          color="border-purple-500"
        />

        <StatsCard
          title="Messages"
          value="4"
          color="border-red-500"
        />

      </div>

      <QuickActions />

      <RecentActivities />

    </div>
  );
};

export default DashboardHome;