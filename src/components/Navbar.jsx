import PropTypes from "prop-types";
import { useState } from "react";

const Navbar = ({ navOpen }) => {
  const [activeLink, setActiveLink] = useState('home'); 
  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link',
      id: 'home'
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link',
      id: 'about'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link',
      id: 'work'
    },
    {
      label: 'Skills',
      link: '#skills',
      className: 'nav-link',
      id: 'skills'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden',
      id: 'contact'
    }
  ];


  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link }, key) => (
        <a
          href={link}
          key={key}
          className={`nav-link ${activeLink === link ? 'active' : ''}`}
          onClick={() => handleLinkClick(link)}
        >
          {label}
        </a>
      ))}
      <div className="active-box"></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
