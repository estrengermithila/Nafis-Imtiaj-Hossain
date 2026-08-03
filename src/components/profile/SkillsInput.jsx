import { useState } from "react";


const SkillsInput = ({ profileData, setProfileData }) => {


  const [skill, setSkill] = useState("");



  const addSkill = () => {

    if (!skill.trim()) return;


    setProfileData({

      ...profileData,

      skills:[
        ...profileData.skills,
        skill
      ]

    });


    setSkill("");

  };



  const removeSkill = (index) => {


    const updatedSkills = profileData.skills.filter(
      (_, i)=> i !== index
    );


    setProfileData({

      ...profileData,

      skills: updatedSkills

    });


  };



  return (

    <div className="bg-white p-6 rounded-xl shadow">


      <h2 className="text-xl font-bold mb-4">
        Skills
      </h2>



      <div className="flex gap-3">


        <input

          type="text"

          placeholder="Enter skill"

          value={skill}

          onChange={(e)=>setSkill(e.target.value)}

          className="input input-bordered flex-1"

        />



        <button

          type="button"

          onClick={addSkill}

          className="btn btn-primary"

        >

          Add

        </button>


      </div>



      <div className="flex flex-wrap gap-3 mt-5">


        {
          profileData.skills.map((item,index)=>(

            <div

              key={index}

              className="badge badge-lg gap-2"

            >

              {item}


              <button

                type="button"

                onClick={()=>removeSkill(index)}

              >
                ✕
              </button>


            </div>


          ))
        }


      </div>


    </div>

  );
};


export default SkillsInput;