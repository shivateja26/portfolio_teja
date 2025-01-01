import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Skills',
      href: '#work'
    },
    {
      label: 'Projects',
      href: '#project'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/shivateja26'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/amalakanti-shiva-teja-ba3856184'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/shivateja1998'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/shiva_teja_naidu/?api=1%2F&hl=zh-cn'
    },
  ];

const Footer = () => {
    return (
        <footer id="contact" className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className=" mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                            Always evolving, Always improving, Always delivering!
                        </h2>
                        <ButtonPrimary 
                            href="mailto:shivateja.amalakanti@gmail.com"
                            label="Hire Me"
                            icon="check_circle"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="text-3xl">Sitemap</p>
                            <ul className="mb-2 text-xl text-zinc-400 py-1 transition-colors
                            hover:text-zinc-200">
                                
                                {sitemap.map(({ label, href }, key) => {
                                    return (
                                        <li key={key}>
                                            <a href={href} className="">{label}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div>
                            <p className="text-3xl">Socials</p>
                            <ul className="mb-2 text-xl text-zinc-400 py-1 transition-colors
                            hover:text-zinc-200">
                                
                                {socials.map(({ label, href }, key) => {
                                    return (
                                        <li key={key}>
                                            <a href={href} target="_blank" className="">{label}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="">
                    <a href="" className="">
                        <img src="/images/logo.png" width={40} height={40} alt="Logo" />
                    </a>
                    <p className="">&copy;2024
                        <span className=""> Shivateja.A</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
