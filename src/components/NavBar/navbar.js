import React, { useState } from 'react';
import "./navbar.css";
import logo from "../NavBar/private_logo.png";
import { Link } from "react-scroll";
import Menu from "../NavBar/Menu1.png";



const  Navbar = () => {
  const navigateToContactSection = () => { 
    const element = document.getElementById("contact");
    const offset = 100;
      
      if (element) {
        const rect = element.getBoundingClientRect();
        
        const absoluteTop = window.pageYOffset + rect.top - offset;
        
        window.scrollTo({
          top: absoluteTop,
          behavior: 'smooth' 
        });
      }
  }
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
      <img src={logo} alt="logo"className='logo'/> 
      <div className='desktopMenu'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={500} className='desktopMenuListItem'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-85} duration={500} className='desktopMenuListItem'>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Clients</Link>
      </div>

      <button className='desktopMenuBtn' onClick={navigateToContactSection}>Contact</button>

      <img src={Menu} alt="menu"className='mobMenu'onClick={()=>setShowMenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu? "flex":"none"}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-85} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>


    </nav>
  )
}

export default Navbar;