import { motion } from "framer-motion";
import {
  FaUser,
  FaClock,
  FaProjectDiagram,
  FaBook,
  FaMicrophone,
} from "react-icons/fa";

import useProfile from "../../hooks/useProfile";



const About = () => {


  const { profile, loading } = useProfile();



  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        Loading...
      </section>
    );
  }



  return (

    <section
      id="about"
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">



          {/* Left Content */}


          <motion.div

            initial={{
              opacity:0,
              x:-70
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:.8
            }}

            viewport={{
              once:true
            }}

            className="order-2 lg:order-1"

          >


            <h2
              className="
              flex
              items-center
              gap-3
              text-3xl
              sm:text-4xl
              font-bold
              text-slate-900
              mb-6
              "
            >

              <FaUser className="text-green-600"/>

              About Me

            </h2>




            <h3 className="text-2xl font-bold text-slate-800">

              {profile?.name}

            </h3>



            <p className="text-green-600 font-semibold mt-2">

              {profile?.title}

            </p>




            <p
              className="
              mt-6
              text-gray-600
              text-base
              sm:text-lg
              leading-8
              text-justify
              "
            >

              {profile?.about || profile?.description}

            </p>



            <p
              className="
              mt-6
              text-gray-600
              text-base
              sm:text-lg
              leading-8
              text-justify
              "
            >

              I work with modern technologies and research tools
              including GIS, Remote Sensing, Data Analysis,
              Programming and scientific research methodologies.

            </p>



          </motion.div>






          {/* Image */}


          <motion.div

            initial={{
              opacity:0,
              x:70
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:.8
            }}

            viewport={{
              once:true
            }}

            className="flex justify-center order-1 lg:order-2"

          >


            <div
              className="
              w-56
              h-56
              sm:w-72
              sm:h-72
              lg:w-80
              lg:h-80
              rounded-full
              p-2
              bg-gradient-to-r
              from-green-400
              via-lime-400
              to-cyan-400
              shadow-xl
              "
            >


              <img

                src={profile?.image}

                alt={profile?.name}

                className="
                w-full
                h-full
                rounded-full
                object-cover
                border-4
                border-white
                "
              />


            </div>


          </motion.div>



        </div>







        {/* Stats */}


        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
          mt-14
          "
        >



          {[
            {
              icon:<FaClock/>,
              number:"3+",
              text:"Years Experience"
            },

            {
              icon:<FaProjectDiagram/>,
              number:"10+",
              text:"Research Projects"
            },

            {
              icon:<FaBook/>,
              number:"15+",
              text:"Publications"
            },

            {
              icon:<FaMicrophone/>,
              number:"5+",
              text:"Conferences"
            }

          ].map((item,index)=>(


            <motion.div

              key={index}

              whileHover={{
                y:-8,
                scale:1.03
              }}

              className="
              bg-white
              rounded-2xl
              p-6
              shadow-lg
              border
              text-center
              "

            >


              <div className="text-3xl text-green-600 mb-4 flex justify-center">

                {item.icon}

              </div>



              <h3 className="text-4xl font-bold text-slate-900">

                {item.number}

              </h3>



              <p className="text-gray-500 mt-2">

                {item.text}

              </p>



            </motion.div>


          ))}



        </div>







        {/* Research Expertise */}



        <motion.div

          initial={{
            opacity:0,
            y:70
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:true
          }}

          className="
          mt-16
          bg-gray-50
          rounded-3xl
          p-6
          sm:p-8
          border
          "

        >



          <h3 className="text-3xl font-bold text-slate-900 mb-8">

            Research Expertise

          </h3>




          <div className="flex flex-wrap gap-3">


            {
              profile?.skills?.map((skill,index)=>(

                <span

                  key={index}

                  className="
                  px-5
                  py-3
                  rounded-full
                  bg-green-100
                  text-green-700
                  border
                  border-green-200
                  font-medium
                  hover:bg-green-600
                  hover:text-white
                  transition
                  "

                >

                  {skill}

                </span>

              ))
            }


          </div>



        </motion.div>




      </div>



    </section>

  );

};


export default About;