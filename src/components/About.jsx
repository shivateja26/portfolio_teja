import { number, symbol } from "prop-types";

const aboutItems = [
    {
      label: 'Project done',
      number: 5
    },
    {
      label: 'Years of experience',
      number: 3
    }
  ];
const About = ()=>{
    return(
       <section id="about" className="section" >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[80ch]">
                Welcome!, I&apos;m Shiva Teja Amalakanti, Expertise in HTML, CSS, JavaScript, ReactJS, and Tailwind CSS. Proficient in building responsive, user-friendly, and visually appealing web applications. Experienced in leveraging Node.js for backend and enhancing full-stack capabilities. Adept at creating dynamic and interactive user interfaces while ensuring optimal performance and cross-browser compatibility. Continuously learning and staying updated with the latest industry trends
                 <br/>  <br/>Let’s connect — I’m always open to opportunities to collaborate and make a meaningful impact.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">{
                    aboutItems.map(({label,number},key) =>(
                        <div key={key}>
                            <div className="flex  items-center md:mb-2">
                                <span className="text-2xl semi-bold md:text-4xl">{number}</span>
                                <span className="text-green-500 font-semibold md:text-3xl">+</span>
                            </div>
                            <p className="">{label}</p>
                        </div>
                    ))
                }
               <img src="/images/logo.png" alt="logo" width={30} height={30} className="ml-auto md:w-[30px] md:h-[30px]"/>
                </div>
            </div>
        </div>

       </section>
    )
}
export default About