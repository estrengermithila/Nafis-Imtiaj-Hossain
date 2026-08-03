const CVUpload = ({ profileData, setProfileData }) => {


  const handleCVChange = (e) => {


    const file = e.target.files[0];


    if (!file) return;



    // Only PDF allow
    if (file.type !== "application/pdf") {

      alert("Only PDF file is allowed");

      return;

    }



    setProfileData({

      ...profileData,

      cv: file

    });


  };




  return (

    <div className="bg-white p-6 rounded-xl shadow-md">


      <h2 className="text-xl font-bold mb-5">
        Upload CV
      </h2>



      <input

        type="file"

        accept=".pdf"

        onChange={handleCVChange}

        className="file-input file-input-bordered w-full"

      />




      {
        profileData?.cv && (

          <div className="mt-4 p-3 bg-gray-100 rounded-lg">


            <p className="font-semibold">
              Selected CV:
            </p>


            <p className="text-sm">
              {profileData.cv.name}
            </p>


          </div>

        )
      }



    </div>

  );

};


export default CVUpload;