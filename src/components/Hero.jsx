const Hero=()=>{
    return (
       <section id="home" className="pt-28 lg:pt-36">
         <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img src="/images/avatar-1.png" width={40} height={40} atlt="teja-potrait" className="img-cover"/>
                    </figure>
                    <div className=" flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Available
                    </div>
                </div>
                <h2 className="headline-1">
                I’m a Front-End Developer crafting seamless experiences
                </h2>
                <div className="">
                   ButtonPrimary

                   ButtonOutline
                </div>
            </div>
            <div className="">
                <figure className="">
                    <img src="/images/hero-banner.png" width={656} height={800} alt=" Shiva teja" className="w-full" />
                </figure>

            </div>
         </div>
       </section>
    )
}
export default Hero