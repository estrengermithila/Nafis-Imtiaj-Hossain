const EducationSection = ({ profileData, setProfileData }) => {


  const educations = profileData?.education || [];



  const addEducation = () => {


    const newEducation = {

      degree: "",
      institution: "",
      department: "",
      startYear: "",
      endYear: "",
      description: ""

    };



    setProfileData({

      ...profileData,

      education: [
        ...educations,
        newEducation
      ]

    });


  };





  const handleChange = (index, e) => {


    const { name, value } = e.target;



    const updatedEducation = educations.map((education, i) => {


      if(i === index){

        return {

          ...education,

          [name]: value

        };

      }


      return education;


    });




    setProfileData({

      ...profileData,

      education: updatedEducation

    });


  };






  const removeEducation = (index) => {


    const updatedEducation = educations.filter(
      (_, i)=> i !== index
    );



    setProfileData({

      ...profileData,

      education: updatedEducation

    });


  };






  return (

    <div className="bg-white p-6 rounded-xl shadow-md">


      <h2 className="text-xl font-bold mb-5">
        Education
      </h2>




      {
        educations.length === 0 && (

          <p className="text-gray-500 mb-4">
            No education added yet
          </p>

        )
      }





      {
        educations.map((education,index)=>(


          <div

            key={index}

            className="border rounded-lg p-5 mb-5"

          >


            <div className="grid md:grid-cols-2 gap-4">


              <input

                type="text"

                name="degree"

                placeholder="Degree"

                value={education.degree}

                onChange={(e)=>handleChange(index,e)}

                className="input input-bordered w-full"

              />





              <input

                type="text"

                name="institution"

                placeholder="Institution"

                value={education.institution}

                onChange={(e)=>handleChange(index,e)}

                className="input input-bordered w-full"

              />





              <input

                type="text"

                name="department"

                placeholder="Department"

                value={education.department}

                onChange={(e)=>handleChange(index,e)}

                className="input input-bordered w-full"

              />





              <input

                type="text"

                name="startYear"

                placeholder="Start Year"

                value={education.startYear}

                onChange={(e)=>handleChange(index,e)}

                className="input input-bordered w-full"

              />





              <input

                type="text"

                name="endYear"

                placeholder="End Year"

                value={education.endYear}

                onChange={(e)=>handleChange(index,e)}

                className="input input-bordered w-full"

              />


            </div>





            <textarea

              name="description"

              placeholder="Description"

              value={education.description}

              onChange={(e)=>handleChange(index,e)}

              className="textarea textarea-bordered w-full mt-4"

            />





            {
              educations.length > 1 && (

                <button

                  type="button"

                  onClick={()=>removeEducation(index)}

                  className="btn btn-error mt-4"

                >

                  Remove

                </button>

              )
            }



          </div>


        ))
      }





      <button

        type="button"

        onClick={addEducation}

        className="btn btn-primary"

      >

        + Add Education

      </button>




    </div>

  );

};


export default EducationSection;