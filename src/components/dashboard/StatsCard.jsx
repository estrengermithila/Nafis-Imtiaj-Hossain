

const StatsCard = ({ title, value, color }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${color}`}
    >
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <h1 className="text-4xl font-bold mt-2">
        {value}
      </h1>
    </div>
  );
};

export default StatsCard;