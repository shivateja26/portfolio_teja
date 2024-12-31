import { ButtonPrimary ,ButtonOutline} from "./Button";

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
                <h2 className="headline-1 max-w-[15ch] sm: sm:max-w-[20ch] 
                lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                I’m a Front-End Developer crafting seamless experiences
                </h2>
                <div className="flex items-center gap-3">
                   <ButtonPrimary 
                   label="Resume" 
                   icon="download"/>

                   <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward"/>
                </div>
            </div>
            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-cyan-300 via-25% via-cyan-300/30
                to-70% rounded-[60px] overflow-hidden">
                    <img src="/images/hero-banner.png" width={656} height={800} alt=" Shiva teja" className="w-full" />
                </figure>

            </div>
         </div>
       </section>
    )
}
export default Hero