import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";

import useExperience from "../../hooks/useExperience";


const Experience = () => {


  const { experiences, loading } = useExperience();



  if (loading) {

    return (
      <section className="py-20 text-center">
        <h2 className="text-2xl font-semibold">
          Loading Experience...
        </h2>
      </section>
    );

  }





return (

<section
id="experience"
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
duration:.7
}}

viewport={{
once:false
}}

className="
text-center
mb-14
lg:mb-20
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
Experience
</h2>


<div
className="
w-24
h-1
rounded-full
bg-gradient-to-r
from-lime-400
via-green-400
to-cyan-400
mx-auto
mt-5
"
/>


<p
className="
mt-5
text-gray-500
text-base
sm:text-lg
"
>
Professional Journey
</p>


</motion.div>







{/* Timeline */}

<div
className="
relative
"
>


{/* Desktop Line */}

<div
className="
hidden
md:block
absolute
left-1/2
top-0
-translate-x-1/2
w-1
h-full
bg-gradient-to-b
from-lime-400
via-green-400
to-cyan-400
rounded-full
"
/>





{/* Mobile Line */}

<div
className="
md:hidden
absolute
left-5
top-0
w-1
h-full
bg-gradient-to-b
from-lime-400
via-green-400
to-cyan-400
rounded-full
"
/>






<div
className="
space-y-12
sm:space-y-16
lg:space-y-24
"
>


{
experiences.map((item,index)=>(


<motion.div

key={item._id}


initial={{
opacity:0,
x:index%2===0 ? -60:60
}}


whileInView={{
opacity:1,
x:0
}}


transition={{
duration:.6
}}


viewport={{
once:false,
amount:.2
}}



className={`

relative
flex
items-center


${
index%2===0
?
"md:justify-start"
:
"md:justify-end"
}

`}


>







{/* Desktop Icon */}

<div
className="
hidden
md:flex
absolute
left-1/2
-translate-x-1/2
w-12
h-12
rounded-full
bg-gradient-to-r
from-lime-400
via-green-400
to-cyan-400
border-4
border-white
shadow-xl
items-center
justify-center
z-10
"
>


<FaBriefcase
className="
text-white
text-lg
"
/>


</div>







{/* Mobile Icon */}

<div
className="
md:hidden
absolute
left-5
-translate-x-1/2
w-10
h-10
rounded-full
bg-gradient-to-r
from-lime-400
via-green-400
to-cyan-400
border-4
border-white
shadow-lg
flex
items-center
justify-center
z-10
"
>


<FaBriefcase
className="
text-white
text-sm
"
/>


</div>








{/* Card */}

<motion.div


whileHover={{
y:-8,
scale:1.02
}}


transition={{
duration:.3
}}



className="
group
relative
w-full
ml-12
sm:ml-14
md:ml-0
md:w-[44%]
bg-white
rounded-2xl
lg:rounded-3xl
border
border-gray-200
shadow-lg
hover:shadow-2xl
hover:border-lime-400
transition-all
duration-300
p-5
sm:p-6
lg:p-8
"

>



<div
className="
absolute
top-0
left-0
w-full
h-1
rounded-t-3xl
bg-gradient-to-r
from-lime-400
via-green-400
to-cyan-400
"
/>





<h3
className="
text-lg
sm:text-xl
lg:text-2xl
font-bold
text-[#071426]
"
>

{item.position}

</h3>







<div
className="
flex
items-start
gap-3
mt-4
"
>


<FaBuilding
className="
text-lime-500
mt-1
shrink-0
"
/>


<span
className="
text-sm
sm:text-base
font-medium
text-gray-700
leading-6
"
>

{item.company}

</span>


</div>








<div
className="
flex
items-center
gap-3
mt-3
"
>


<FaCalendarAlt
className="
text-cyan-500
shrink-0
"
/>


<span
className="
text-sm
text-gray-500
"
>

{item.duration}

</span>


</div>







<p
className="
mt-5
text-sm
sm:text-base
leading-7
text-gray-600
"
>

{item.description}

</p>





{
item.technologies?.length > 0 && (

<div className="flex flex-wrap gap-2 mt-5">

{
item.technologies.map((tech,index)=>(

<span
key={index}
className="
px-3
py-1
rounded-full
bg-green-100
text-green-700
text-sm
"
>

{tech}

</span>

))
}

</div>

)
}







<div
className="
mt-6
h-1
w-0
rounded-full
bg-gradient-to-r
from-lime-400
via-green-400
to-cyan-400
group-hover:w-full
transition-all
duration-500
"
/>




</motion.div>






</motion.div>


))

}


</div>



</div>


</div>


</section>

);

};


export default Experience;