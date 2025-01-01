import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleMenuClick = () => {
    setNavOpen(prevState => !prevState); 
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 mt-2">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img src="/images/logo.png" width={40} height={40} alt="shiva teja" />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button onClick={handleMenuClick} className="menu-btn md:hidden">
            <span className="material-symbols-rounded">{navOpen ? 'close' : 'menu'}</span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a 
  href="mailto:shivateja.amalakanti@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20services." 
  className="btn btn-secondary max-md:hidden md:justify-self-end"
>
  Contact Me
</a>

      </div>
    </header>
  );
};

export default Header;
