import { useState } from "react";


const ProfileImageUpload = ({ profileData, setProfileData }) => {


  const [preview, setPreview] = useState(
    profileData?.image || ""
  );



  const handleImageChange = (e) => {


    const file = e.target.files[0];


    if(!file) return;



    // Preview show করার জন্য
    const imageURL = URL.createObjectURL(file);


    setPreview(imageURL);



    // Parent state update
    setProfileData({

      ...profileData,

      image: file

    });


  };





  return (

    <div className="bg-white p-6 rounded-xl shadow-md">


      <h2 className="text-xl font-bold mb-5">
        Profile Image
      </h2>




      <div className="flex flex-col items-center gap-4">


        {
          preview ? (

            <img

              src={preview}

              alt="profile preview"

              className="w-32 h-32 rounded-full object-cover"

            />

          )

          :

          (

            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">

              No Image

            </div>

          )

        }





        <input

          type="file"

          accept="image/*"

          onChange={handleImageChange}

          className="file-input file-input-bordered w-full max-w-xs"

        />



      </div>


    </div>

  );

};


export default ProfileImageUpload;