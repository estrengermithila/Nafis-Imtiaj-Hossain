import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";


const projects = [
  {
    title: "Climate Damage Function & Climate Finance",
    category: "UNDP Bangladesh",
    description:
      "Supported Climate Damage Function (CDF), Climate Vulnerability Index (CVI), Climate Risk Index (CRI), and asset loss assessment for climate finance projects.",
    technologies: [
      "ArcGIS Pro",
      "Python",
      "R",
      "Climate Finance",
      "GIS",
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Flood Vulnerability Assessment",
    category: "Oxfam Bangladesh",
    description:
      "Developed GIS-based flood vulnerability maps and integrated hydrological datasets into IWRM models using MCDA techniques.",
    technologies: [
      "ArcGIS",
      "GIS-RS",
      "MCDA",
      "Hydrology",
      "Remote Sensing",
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Climate Resilience & Loss Assessment",
    category: "ICCCAD",
    description:
      "Worked on Loss & Damage projects including hazard mapping, CCVA, LCAP, stakeholder engagement and adaptation planning.",
    technologies: [
      "GIS",
      "Climate",
      "CCVA",
      "LCAP",
      "Research",
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Sundarbans Phytoplankton Analysis",
    category: "Bangladesh Maritime University",
    description:
      "Analyzed phytoplankton diversity, nutrients, heavy metals and ecological health of Sundarbans using statistical models.",
    technologies: [
      "Python",
      "SPSS",
      "R",
      "Ecology",
      "Oceanography",
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Marine Pollution Assessment",
    category: "Environmental Research",
    description:
      "Investigated marine pollution, biofouling, sediment quality and ecosystem monitoring through laboratory and field research.",
    technologies: [
      "Water Quality",
      "GIS",
      "Statistics",
      "Research",
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Dharla River IWRM",
    category: "Research Project",
    description:
      "Prepared Integrated Water Resources Management plan using flood risk mapping, GIS analysis and vulnerability assessment.",
    technologies: [
      "GIS",
      "IWRM",
      "Flood Mapping",
      "Python",
    ],
    github: "#",
    live: "#",
  },
];



const Projects = () => {

return (

<section
id="projects"
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


<motion.div

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

viewport={{
once:false
}}

className="
text-center
mb-12
sm:mb-14
lg:mb-16
"

>


<h2
className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-[#071426]
"
>
Projects
</h2>



<div
className="
w-24
h-1
bg-gradient-to-r
from-lime-400
via-green-400
to-cyan-400
rounded-full
mx-auto
mt-5
"
/>


<p
className="
mt-5
text-gray-500
text-sm
sm:text-base
lg:text-lg
"
>
Research Projects & Environmental Studies
</p>


</motion.div>





{/* Cards Grid */}


<div
className="
grid

grid-cols-1

sm:grid-cols-1

md:grid-cols-2

xl:grid-cols-3

gap-6

sm:gap-8

"
>



{
projects.map((project,index)=>(



<motion.div

key={index}


initial={{
opacity:0,
y:60
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:.6,
delay:index*.15
}}


viewport={{
once:false
}}


whileHover={{
y:-10
}}



className="
group
bg-white
rounded-2xl
lg:rounded-3xl
border
border-gray-200
shadow-lg
hover:shadow-2xl
transition-all
duration-300
overflow-hidden
flex
flex-col
h-full
"

>



{/* Gradient */}

<div
className="
h-2
bg-gradient-to-r
from-lime-400
via-green-400
to-cyan-400
"
/>





<div
className="
p-5
sm:p-6
lg:p-7
flex
flex-col
h-full
"
>



<div
className="
flex
items-start
gap-2
text-lime-600
text-sm
font-medium
mb-4
"
>

<FaMapMarkedAlt
className="mt-1 shrink-0"
/>


<span>
{project.category}
</span>


</div>





<h3
className="
text-xl
sm:text-2xl
font-bold
text-[#071426]
mb-4
group-hover:text-lime-500
transition-colors
leading-tight
"
>

{project.title}

</h3>





<p
className="
text-sm
sm:text-base
text-gray-600
leading-7
mb-6
"
>

{project.description}

</p>





{/* Technology */}

<div
className="
flex
flex-wrap
gap-2
mb-8
"
>


{
project.technologies.map((tech,i)=>(


<span

key={i}

className="
px-3
py-1
rounded-full
text-xs
sm:text-sm
font-medium
bg-lime-100
text-lime-700
hover:bg-lime-500
hover:text-white
transition-all
duration-300
"

>

{tech}

</span>


))

}


</div>







{/* Buttons */}

<div
className="
mt-auto
flex
flex-col
sm:flex-row
gap-3
justify-between
"
>



<a
href={project.github}
target="_blank"
rel="noreferrer"

className="
flex
items-center
justify-center
gap-2
px-4
py-2
rounded-xl
bg-[#071426]
text-white
hover:bg-lime-500
transition-all
duration-300
text-sm
sm:text-base
"
>

<FaGithub/>

<span>
GitHub
</span>


</a>





<a
href={project.live}
target="_blank"
rel="noreferrer"

className="
flex
items-center
justify-center
gap-2
px-4
py-2
rounded-xl
border
border-lime-500
text-lime-600
hover:bg-lime-500
hover:text-white
transition-all
duration-300
text-sm
sm:text-base
"
>

<FaExternalLinkAlt/>

<span>
Live
</span>


</a>




</div>



</div>



</motion.div>



))

}



</div>




</div>


</section>

)

}


export default Projects;