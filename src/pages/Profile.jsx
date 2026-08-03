import ProfileForm from "../components/profile/ProfileForm";

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Profile Management
        </h1>

        <p className="text-gray-500 mt-2">
          Update your personal information.
        </p>

      </div>

      <ProfileForm />

    </div>
  );
};

export default Profile;