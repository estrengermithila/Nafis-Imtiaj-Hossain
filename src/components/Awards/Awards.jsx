import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaStar,
} from "react-icons/fa";


const awards = [
  {
    icon: <FaTrophy />,
    title: "Vice Chancellor Scholarship",
    organization: "BUET",
    year: "2023",
    color: "from-lime-400 to-green-500",
  },
  {
    icon: <FaAward />,
    title: "National Research Contest",
    organization: "Runner-up, MOE, GoB",
    year: "2022",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: <FaMedal />,
    title: "Best Trainee",
    organization: "BMU",
    year: "2019",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: <FaStar />,
    title: "Academic Excellence",
    organization: "Research & Leadership",
    year: "Achievement",
    color: "from-lime-400 to-cyan-400",
  },
];



const Awards = () => {

return (

<section
id="awards"
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


viewport={{
once:false
}}


transition={{
duration:.8
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

Awards &

<span
className="
bg-gradient-to-r
from-lime-400
to-cyan-400
bg-clip-text
text-transparent
"
>

{" "}
Achievements

</span>


</h2>





<div
className="
w-24
h-1
bg-gradient-to-r
from-lime-400
to-cyan-400
mx-auto
rounded-full
mt-5
"
/>





<p
className="
text-gray-500
mt-5
text-sm
sm:text-base
lg:text-lg
"
>

Honors, Scholarships & Recognition

</p>




</motion.div>









{/* Cards */}



<div
className="
grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4

gap-6

sm:gap-8

"
>



{
awards.map((award,index)=>(



<motion.div


key={index}


initial={{
opacity:0,
y:80
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:false
}}


transition={{
duration:.6,
delay:index*.15
}}



whileHover={{
y:-10,
scale:1.03
}}



className="
relative
bg-white
rounded-2xl
lg:rounded-3xl
shadow-lg
border
border-gray-200
hover:border-lime-400
overflow-hidden
transition-all
duration-300
"

>



{/* Top Gradient */}


<div
className={`
h-2
bg-gradient-to-r
${award.color}
`}
></div>





<div
className="
p-5
sm:p-6
lg:p-8
"
>





<div

className={`
w-16
h-16

sm:w-20
sm:h-20

rounded-full

bg-gradient-to-r

${award.color}

flex
items-center
justify-center

text-white

text-2xl
sm:text-3xl

mx-auto

shadow-lg
`}

>


{award.icon}


</div>







<h3

className="
text-lg
sm:text-xl
font-bold
text-center
text-[#071426]
mt-5
sm:mt-6
leading-7
"

>

{award.title}

</h3>





<p

className="
text-center
text-gray-600
mt-3
text-sm
sm:text-base
"

>

{award.organization}

</p>







<div
className="
mt-5
sm:mt-6
text-center
"
>


<span

className={`
inline-block

px-4
sm:px-5

py-2

rounded-full

text-white

text-sm
sm:text-base

bg-gradient-to-r

${award.color}

`}

>


{award.year}


</span>



</div>





</div>





</motion.div>



))


}



</div>





</div>


</section>


);

};


export default Awards;