import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const SocialLinks = ({ profileData, setProfileData }) => {


  const handleChange = (e) => {

    const {name, value} = e.target;

    setProfileData({
      ...profileData,

      socialLinks:{
        ...profileData.socialLinks,
        [name]: value
      }

    });

  };


  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Social Links
      </h2>


      <div className="space-y-4">


        <div className="flex items-center gap-3">

          <FaGithub size={25}/>

          <input
            type="text"
            name="github"
            placeholder="Github URL"
            value={profileData.socialLinks.github}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

        </div>



        <div className="flex items-center gap-3">

          <FaLinkedin size={25}/>

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={profileData.socialLinks.linkedin}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

        </div>



        <div className="flex items-center gap-3">

          <FaFacebook size={25}/>

          <input
            type="text"
            name="facebook"
            placeholder="Facebook URL"
            value={profileData.socialLinks.facebook}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

        </div>


      </div>


    </div>
  );
};

export default SocialLinks;