import React from 'react';
import "./skills.css";
import HtmlIcon from "./HtmlIcon.png";
import CssIcon from "./CssIcon.png";
import JsIcon from "./JsIcon.png";
import ReactIcon from "./ReactIcon.png";
import GitIcon from "./GitIcon.png";


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>About Me</span>
        <span className='skillDesc'>"As a junior web developer, I am on an exciting journey of exploration and growth within the vast realm of web development. With a foundation in HTML, CSS, and JavaScript, I am eager to expand my skill set and contribute to the creation of dynamic and user-friendly websites. I approach each project with enthusiasm and a willingness to learn, seeking out opportunities to collaborate with experienced developers and absorb their insights."</span>
        <div className='skillBars'>
          <div className='skillBar'>
              <img src={HtmlIcon} alt='HtmlIcon' className='skillBarImg' />
              <div className='skillBarText'>
                <h2>HTML</h2>
                <p>Provides the structure of web pages.</p>
              </div>
          </div>
          <div className='skillBar'>
              <img src={CssIcon} alt='CssIcon' className='skillBarImg' />
              <div className='skillBarText'>
                <h2>CSS</h2>
                <p>Styles their appearance</p>
              </div>
          </div>
          <div className='skillBar'>
              <img src={JsIcon} alt='JsIcon' className='skillBarImg' />
              <div className='skillBarText'>
                <h2>JavaScript</h2>
                <p>It adds interactivity</p>
              </div>
          </div>
          <div className='skillBar'>
              <img src={ReactIcon} alt='ReactIcon' className='skillBarImg' />
              <div className='skillBarText'>
                <h2>Reactjs</h2>
                <p>Simplifies the development of user interfaces</p>
              </div>
          </div>
          <div className='skillBar'>
              <img src={GitIcon} alt='GitIcon' className='skillBarImg' />
              <div className='skillBarText'>
                <h2>GitHub</h2>
                <p>Facilitates collaboration and version control for software projects</p>
              </div>
          </div>
        </div>
    </section>
  );
}

export default Skills;