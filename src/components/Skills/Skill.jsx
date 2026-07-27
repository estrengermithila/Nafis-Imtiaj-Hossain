import { motion } from "framer-motion";
import {
  FaLeaf,
  FaWater,
  FaMapMarkedAlt,
  FaChartLine,
  FaDatabase,
  FaPython,
  FaFileExcel,
  FaRProject,
} from "react-icons/fa";


const skills = [
  {
    name: "Climate Change",
    icon: <FaLeaf />,
    percent: 95,
  },
  {
    name: "Water Resources",
    icon: <FaWater />,
    percent: 92,
  },
  {
    name: "GIS & Remote Sensing",
    icon: <FaMapMarkedAlt />,
    percent: 90,
  },
  {
    name: "Spatial Analysis",
    icon: <FaChartLine />,
    percent: 88,
  },
  {
    name: "Data Analysis",
    icon: <FaDatabase />,
    percent: 90,
  },
  {
    name: "Python",
    icon: <FaPython />,
    percent: 85,
  },
  {
    name: "Microsoft Excel",
    icon: <FaFileExcel />,
    percent: 95,
  },
  {
    name: "R Programming",
    icon: <FaRProject />,
    percent: 82,
  },
];



const Skills = () => {

return (

<section
id="skills"
className="
w-full
bg-white
py-16
sm:py-20
lg:py-24
overflow-hidden
"
>


<div
className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
"
>



{/* Heading */}


<motion.h2

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

viewport={{
once:false
}}


className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-center
mb-12
sm:mb-16
"

>

Technical{" "}

<span
className="
bg-gradient-to-r
from-green-500
to-cyan-500
bg-clip-text
text-transparent
"
>
Skills
</span>


</motion.h2>





{/* Skills Grid */}


<div
className="
grid

grid-cols-1

md:grid-cols-2

gap-8

sm:gap-10

lg:gap-12
"
>



{
skills.map((skill,index)=>(


<motion.div

key={index}


initial={{
opacity:0,
x:-50
}}


whileInView={{
opacity:1,
x:0
}}


transition={{
duration:.6,
delay:index*.1
}}


viewport={{
once:true
}}

>


{/* Name */}


<div
className="
flex
justify-between
items-center
mb-3
gap-3
"
>


<div
className="
flex
items-center
gap-3
min-w-0
"
>


<div
className="
text-green-600
text-lg
sm:text-xl
shrink-0
"
>

{skill.icon}

</div>




<h3
className="
font-semibold
text-gray-800
text-sm
sm:text-base
lg:text-lg
truncate
"
>

{skill.name}

</h3>



</div>




<span
className="
font-bold
text-green-600
text-sm
sm:text-base
shrink-0
"
>

{skill.percent}%

</span>




</div>







{/* Progress */}


<div
className="
w-full
h-2
sm:h-3
bg-gray-200
rounded-full
overflow-hidden
"
>


<motion.div


initial={{
width:0
}}


whileInView={{
width:`${skill.percent}%`
}}


transition={{
duration:1.5
}}


viewport={{
once:true
}}


className="
h-full
rounded-full
bg-gradient-to-r
from-green-400
via-cyan-400
to-green-500
shadow-[0_0_18px_rgba(34,197,94,.5)]
"

/>


</div>




</motion.div>


))


}



</div>




</div>


</section>


);

};


export default Skills;