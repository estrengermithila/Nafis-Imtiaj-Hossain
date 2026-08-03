import { motion } from "framer-motion";
import useExperience from "../hooks/useExperience";


const Experience = () => {

  const { experiences, loading } = useExperience();


  if (loading) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }


  return (
    <section
      id="experience"
      className="py-20 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="
          text-4xl
          font-bold
          text-slate-900
          mb-10
        ">
          Experience
        </h2>



        <div className="grid gap-8">


          {
            experiences.map((item)=>(
              
              <motion.div
                key={item._id}
                initial={{
                  opacity:0,
                  y:40
                }}
                whileInView={{
                  opacity:1,
                  y:0
                }}
                transition={{
                  duration:.6
                }}
                className="
                  bg-gray-50
                  p-6
                  rounded-xl
                  shadow-md
                "
              >

                <h3 className="
                  text-2xl
                  font-bold
                ">
                  {item.position}
                </h3>


                <p className="
                  text-green-600
                  font-semibold
                  mt-2
                ">
                  {item.company}
                </p>


                <p className="text-gray-500 mt-1">
                  {item.duration}
                </p>


                <p className="
                  text-gray-600
                  mt-4
                ">
                  {item.description}
                </p>



                <div className="flex flex-wrap gap-3 mt-4">

                  {
                    item.technologies?.map((tech,index)=>(
                      <span
                        key={index}
                        className="
                        bg-green-100
                        text-green-700
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        "
                      >
                        {tech}
                      </span>
                    ))
                  }

                </div>


              </motion.div>

            ))
          }


        </div>


      </div>


    </section>
  );
};


export default Experience;