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
                Welcome!, I&apos;m Shiva Teja Amalakanti, a passionate Front-End Developer with over 3 years of hands-on experience in crafting seamless, high-performance websites and web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I bring ideas to life with clean, responsive, and engaging user interfaces.I excel at tackling complex challenges and creating solutions that prioritize user experience, performance, and accessibility.
                 I’ve collaborated with cross-functional teams, and delivered successful projects that not only meet client goals but also push the boundaries of creativity and functionality. I am eager to continue expanding my skill set, and I’m always excited about new challenges that allow me to grow as a developer.
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