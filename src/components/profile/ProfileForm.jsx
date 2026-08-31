
import { useEffect, useState } from "react";

import CVUpload from "./CVUpload";
import EducationSection from "./EducationSection";
import ProfileImageUpload from "./ProfileImageUpload";
import SkillsInput from "./SkillsInput";
import SocialLinks from "./SocialLinks";

import axiosPublic from "../../api/axios";

const ProfileForm = () => {
  const [profileId, setProfileId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [profileData, setProfileData] = useState({
    image: "",
    socialLinks: {
      github: "",
      linkedin: "",
      facebook: "",
      researchgate: "",
      googleScholar: "",
    },
    skills: [],
    cv: "",
    education: [],
  });

  // =====================================
  // Fetch Existing Profile
  // =====================================

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);

        const res = await axiosPublic.get("/profile");

        const profile = res.data?.data;

        if (profile) {
          setProfileId(profile._id);

          setProfileData({
            image: profile.image || "",

            socialLinks: {
              github: profile.socialLinks?.github || "",
              linkedin: profile.socialLinks?.linkedin || "",
              facebook: profile.socialLinks?.facebook || "",
              researchgate:
                profile.socialLinks?.researchgate || "",
              googleScholar:
                profile.socialLinks?.googleScholar || "",
            },

            skills: profile.skills || [],

            cv: profile.cv || "",

            education: profile.education || [],
          });
        }
      } catch (error) {
        console.error("Fetch Profile Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // =====================================
  // Save / Update Profile
  // =====================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!profileId) {
      alert("Profile not found!");
      return;
    }

    try {
      setSaving(true);

      const formData = new FormData();

      // =====================================
      // Image
      // =====================================

      if (profileData.image instanceof File) {
        formData.append("image", profileData.image);
      }

      // =====================================
      // CV
      // =====================================

      if (profileData.cv instanceof File) {
        formData.append("cv", profileData.cv);
      }

      // =====================================
      // Social Links
      // =====================================

      formData.append(
        "socialLinks",
        JSON.stringify(profileData.socialLinks)
      );

      // =====================================
      // Skills
      // =====================================

      formData.append(
        "skills",
        JSON.stringify(profileData.skills)
      );

      // =====================================
      // Education
      // =====================================

      formData.append(
        "education",
        JSON.stringify(profileData.education)
      );

      // =====================================
      // Update Backend
      // =====================================

      const response = await axiosPublic.patch(
        `/profile/${profileId}`,
        formData
      );

      console.log(
        "Updated Profile:",
        response.data
      );

      // =====================================
      // Update Frontend State Immediately
      // =====================================

      const updatedProfile = response.data?.data;

      if (updatedProfile) {
        setProfileData({
          image: updatedProfile.image || "",

          socialLinks: {
            github:
              updatedProfile.socialLinks?.github || "",
            linkedin:
              updatedProfile.socialLinks?.linkedin || "",
            facebook:
              updatedProfile.socialLinks?.facebook || "",
            researchgate:
              updatedProfile.socialLinks?.researchgate || "",
            googleScholar:
              updatedProfile.socialLinks?.googleScholar || "",
          },

          skills: updatedProfile.skills || [],

          cv: updatedProfile.cv || "",

          education:
            updatedProfile.education || [],
        });
      }

      alert("Profile updated successfully!");
    } catch (error) {
      console.error(
        "Profile Update Error:",
        error
      );

      alert(
        error?.response?.data?.message ||
          "Failed to update profile"
      );
    } finally {
      setSaving(false);
    }
  };

  // =====================================
  // Loading
  // =====================================

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // =====================================
  // UI
  // =====================================

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Profile Image */}

      <ProfileImageUpload
        profileData={profileData}
        setProfileData={setProfileData}
      />

      {/* Social Links */}

      <SocialLinks
        profileData={profileData}
        setProfileData={setProfileData}
      />

      {/* Skills */}

      <SkillsInput
        profileData={profileData}
        setProfileData={setProfileData}
      />

      {/* CV */}

      <CVUpload
        profileData={profileData}
        setProfileData={setProfileData}
      />

      {/* Education */}

      <EducationSection
        profileData={profileData}
        setProfileData={setProfileData}
      />

      {/* Save Button */}

      <button
        type="submit"
        disabled={saving}
        className="btn btn-primary"
      >
        {saving ? "Saving..." : "Save Profile"}
      </button>
    </form>
  );
};

export default ProfileForm;

