import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaFileAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";


const journalPublications = [
  {
    type: "Journal Article",
    title:
      "Mangrove Status, Threats and Conservation Initiatives in Bangladesh: A Review",
    journal: "Open Journal of Marine Science",
    year: "2023",
    doi: "#",
  },
  {
    title:
      "Advances in Environmental Biology",
    journal: "Environmental Biology",
    year: "2022",
    doi: "#",
  },
];


const conferencePublications = [
  {
    type: "Conference Paper",
    title:
      "Beyond the Banks: Comparing Flood-Induced Livelihood Vulnerability Between Char Land and Inland Communities",
    conference:
      "2nd South Asian Conference on Unfolding Emerging Issues in the Context of Changing Climate",
    year: "2024",
    doi: "#",
  },
];



const Publications = () => {


return (

<section
id="publications"
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
Publications
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
text-gray-500
mt-5
sm:mt-6
text-sm
sm:text-base
lg:text-lg
"
>
Journal Articles & Conference Papers
</p>


</motion.div>






{/* Cards */}


<div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
sm:gap-8
"
>





{/* Journal */}


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
h-full
"

>



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
lg:p-8
"
>



<div
className="
flex
items-center
gap-3
mb-8
"
>


<FaBookOpen
className="
text-2xl
sm:text-3xl
text-lime-500
"
/>


<div>

<h3
className="
text-xl
sm:text-2xl
font-bold
text-[#071426]
"
>
Journal Publications
</h3>


<p
className="
text-sm
sm:text-base
text-gray-500
"
>
Peer Reviewed Articles
</p>


</div>


</div>






<div
className="
space-y-8
"
>


{
journalPublications.map((paper,index)=>(


<div

key={index}

className="
border-l-4
border-lime-400
pl-4
sm:pl-5
"

>


<span
className="
text-lime-600
font-semibold
text-sm
"
>
{paper.type}
</span>



<h4
className="
text-lg
sm:text-xl
font-bold
text-[#071426]
mt-2
leading-7
sm:leading-8
"
>
{paper.title}
</h4>



<p
className="
text-sm
sm:text-base
text-gray-600
mt-3
"
>
{paper.journal}, {paper.year}
</p>



<a

href={paper.doi}

target="_blank"

rel="noopener noreferrer"


className="
inline-flex
items-center
gap-2
mt-5
px-4
py-2
rounded-lg
bg-gradient-to-r
from-lime-400
to-cyan-400
text-white
hover:scale-105
transition
text-sm
sm:text-base
"

>

<FaExternalLinkAlt/>

DOI

</a>


</div>


))

}


</div>



</div>



</motion.div>








{/* Conference */}


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


className="
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
h-full
"


>



<div
className="
h-2
bg-gradient-to-r
from-cyan-400
via-green-400
to-lime-400
"
/>




<div
className="
p-5
sm:p-6
lg:p-8
"
>



<div
className="
flex
items-center
gap-3
mb-8
"
>


<FaFileAlt
className="
text-2xl
sm:text-3xl
text-cyan-500
"
/>


<div>


<h3
className="
text-xl
sm:text-2xl
font-bold
text-[#071426]
"
>
Conference Papers
</h3>


<p
className="
text-sm
sm:text-base
text-gray-500
"
>
National & International Conferences
</p>


</div>


</div>






<div
className="
space-y-8
"
>


{
conferencePublications.map((paper,index)=>(


<div

key={index}

className="
border-l-4
border-cyan-400
pl-4
sm:pl-5
"

>


<span
className="
text-cyan-600
font-semibold
text-sm
"
>
{paper.type}
</span>



<h4
className="
text-lg
sm:text-xl
font-bold
text-[#071426]
mt-2
leading-7
sm:leading-8
"
>
{paper.title}
</h4>




<p
className="
text-sm
sm:text-base
text-gray-600
mt-3
"
>
{paper.conference}
</p>



<p
className="
text-gray-500
mt-2
text-sm
"
>
{paper.year}
</p>




<a

href={paper.doi}

target="_blank"

rel="noopener noreferrer"


className="
inline-flex
items-center
gap-2
mt-5
px-4
py-2
rounded-lg
bg-gradient-to-r
from-cyan-400
to-lime-400
text-white
hover:scale-105
transition
text-sm
sm:text-base
"

>

<FaExternalLinkAlt/>

DOI

</a>



</div>



))

}



</div>




</div>




</motion.div>



</div>







{/* Bottom Button */}


<motion.div

initial={{
opacity:0,
y:30
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
mt-10
sm:mt-12
flex
justify-center
lg:justify-start
"

>


<a

href="https://scholar.google.com/"

target="_blank"

rel="noopener noreferrer"


className="
inline-flex
items-center
gap-3
px-6
sm:px-8
py-3
sm:py-4
rounded-xl
font-semibold
text-black
bg-gradient-to-r
from-lime-400
via-green-400
to-cyan-400
shadow-lg
hover:shadow-2xl
hover:scale-105
transition-all
duration-300
text-sm
sm:text-base
"

>


<FaExternalLinkAlt/>

View All Publications


</a>


</motion.div>




</div>


</section>


);

};


export default Publications;