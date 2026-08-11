import { motion } from "framer-motion";
import educationImg from "../../assets/logo.jpg";


const Education = () => {

return (

<section
id="education"
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
w-full
px-4
sm:px-6
lg:px-12
xl:px-20
2xl:px-32
"
>



{/* Heading */}


<motion.div


initial={{
opacity:0,
y:50
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
sm:mb-16
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

Education

</h2>




<div
className="
w-24
sm:w-28
h-1
rounded-full
bg-gradient-to-r
from-lime-400
to-cyan-400
mx-auto
mt-5
"
/>




<p
className="
text-gray-500
text-sm
sm:text-base
lg:text-lg
mt-5
sm:mt-6
"
>

Academic Journey

</p>



</motion.div>






{/* Main Layout */}



<div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-10
sm:gap-14
lg:gap-20
items-center
"
>






{/* Left Side */}



<motion.div


initial={{
opacity:0,
x:-80
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:false
}}


transition={{
duration:.8
}}


className="
flex
justify-center
"

>



<img

src={educationImg}

alt="Education"


className="
w-64
h-64

sm:w-80
sm:h-80

lg:w-[380px]
lg:h-[380px]

xl:w-[430px]
xl:h-[430px]

rounded-full

object-cover

border-4
sm:border-8

border-lime-400

shadow-2xl
"

/>



</motion.div>








{/* Right Side */}



<motion.div


initial={{
opacity:0,
x:80
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:false
}}


transition={{
duration:.8
}}

>


<h3

className="
text-2xl
sm:text-3xl
lg:text-4xl
font-bold
text-[#071426]
mb-8
sm:mb-10
"

>

My Academic Background

</h3>







{/* Master */}



<motion.div


whileHover={{
y:-8
}}


transition={{
duration:.3
}}


className="
bg-white

rounded-xl
sm:rounded-2xl

border-l-4

border-lime-400

shadow-lg

hover:shadow-2xl

transition-all

duration-300

p-5
sm:p-6
lg:p-8

mb-6
sm:mb-8

"

>



<h4
className="
text-xl
sm:text-2xl
font-bold
text-[#071426]
"
>

Master of Science (Research)

</h4>



<p
className="
text-lime-600
font-semibold
mt-2
text-sm
sm:text-base
"
>

Bangladesh University of Engineering and Technology (BUET)

</p>



<p
className="
text-gray-500
mt-1
text-sm
sm:text-base
"
>

2025 – Present

</p>



<p
className="
text-gray-600
leading-7
sm:leading-8
mt-5
text-sm
sm:text-base
"
>

Currently pursuing an M.Sc. (Research) in Water Resources
Engineering at BUET. My research focuses on Climate Change,
GIS, Remote Sensing, Hydrology, Flood Risk Assessment,
Environmental Sustainability and Data-driven Decision Support.

</p>



</motion.div>











{/* Bachelor */}



<motion.div


whileHover={{
y:-8
}}


transition={{
duration:.3
}}


className="
bg-white

rounded-xl
sm:rounded-2xl

border-l-4

border-cyan-400

shadow-lg

hover:shadow-2xl

transition-all

duration-300

p-5
sm:p-6
lg:p-8

"

>



<h4

className="
text-xl
sm:text-2xl
font-bold
text-[#071426]
"

>

Bachelor of Science

</h4>




<p
className="
text-cyan-600
font-semibold
mt-2
text-sm
sm:text-base
"
>

Bangladesh Maritime University (BMU)

</p>




<p
className="
text-gray-500
mt-1
text-sm
sm:text-base
"
>

Water Resources Engineering

</p>




<p
className="
text-gray-600
leading-7
sm:leading-8
mt-5
text-sm
sm:text-base
"
>

Completed my Bachelor of Science in Water Resources Engineering,
where I gained strong knowledge in Hydrology, Hydraulic
Engineering, GIS, Remote Sensing, Climate Change,
Environmental Engineering and Sustainable Water Resources
Management through coursework and research.

</p>




</motion.div>





</motion.div>





</div>





</div>


</section>


);

};


export default Education;