import { useState } from "react";

import CVUpload from "./CVUpload";
import EducationSection from "./EducationSection";
import ProfileImageUpload from "./ProfileImageUpload";
import SkillsInput from "./SkillsInput";
import SocialLinks from "./SocialLinks";

import { createProfile } from "../../api/profileApi";


const ProfileForm = () => {


  const [profileData, setProfileData] = useState({

    image: "",

    socialLinks: {
      github: "",
      linkedin: "",
      facebook: ""
    },

    skills: [],

    cv: "",

    education: []

  });





  const handleSubmit = async (e) => {

    e.preventDefault();



    const formData = new FormData();



    // Image file
    if(profileData.image){

      formData.append(
        "image",
        profileData.image
      );

    }





    // CV file
    if(profileData.cv){

      formData.append(
        "cv",
        profileData.cv
      );

    }





    // Other information
    formData.append(

      "socialLinks",

      JSON.stringify(
        profileData.socialLinks
      )

    );




    formData.append(

      "skills",

      JSON.stringify(
        profileData.skills
      )

    );





    formData.append(

      "education",

      JSON.stringify(
        profileData.education
      )

    );





    try{


      const response = await createProfile(formData);


      console.log(
        "Server Response:",
        response.data
      );


      alert("Profile Saved Successfully");


    }


    catch(error){


      console.log(
        "Profile Save Error:",
        error
      );


      alert("Something went wrong");


    }


  };






  return (

    <form

      onSubmit={handleSubmit}

      className="space-y-6"

    >



      <ProfileImageUpload

        profileData={profileData}

        setProfileData={setProfileData}

      />




      <SocialLinks

        profileData={profileData}

        setProfileData={setProfileData}

      />





      <SkillsInput

        profileData={profileData}

        setProfileData={setProfileData}

      />





      <CVUpload

        profileData={profileData}

        setProfileData={setProfileData}

      />





      <EducationSection

        profileData={profileData}

        setProfileData={setProfileData}

      />





      <button

        type="submit"

        className="btn btn-primary"

      >

        Save Profile

      </button>




    </form>

  );

};


export default ProfileForm;