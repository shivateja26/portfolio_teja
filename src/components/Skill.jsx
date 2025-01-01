import SkillCard from "./SkillCard";
const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
        imgSrc: '/images/html.svg',
        label: 'HTML',
        desc: 'User Interface'
      },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    // {
    //   imgSrc: '/images/nodejs.svg',
    //   label: 'NodeJS',
    //   desc: 'Web Server'
    // },
    // {
    //   imgSrc: '/images/expressjs.svg',
    //   label: 'ExpressJS',
    //   desc: 'Node Framework'
    // },
    // {
    //   imgSrc: '/images/mongodb.svg',
    //   label: 'MongoDB',
    //   desc: 'Database'
    // },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
        imgSrc: '/images/bootstrap.svg',
        label: 'Bootstrap',
        desc: 'User Interface'
      },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    }
  ];
const Skill =()=>{
    return(
        <section id="skills" className="section">
            <div className="container">
                <h2 className="headline-2">
                    Essential tools & Skills I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Transforming ideas into interactive, high-performance websites that
          deliver both elegance and functionality. Ability to bring creative
          concepts to life while ensuring the sites I build are both visually
          appealing.
                </p>
                <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5grid gap-3 grid-cols-[repeat(auto-fill,_minimax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc,label,desc},key)=>(
                            <SkillCard
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Skill;