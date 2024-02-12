import React from "react";
import "./intro.css";
import bg from "../Intro/profile7.png"


const Intro = () => {

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
  
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Honey Queen</span> <br />Web Designer/Web Developer </span> 
            <p className="introPara">I am a web designer/developer and I am eager to expand my skill set and contribute to the <br />creation of dynamic and user-friendly websites. </p>
            <button className='desktopBtn' onClick={navigateToContactSection}>Contact</button>
        </div>
        <img src={bg} alt="profile" className="bg"/>
    </section>
  );
}

export default Intro;