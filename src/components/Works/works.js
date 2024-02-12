import React from "react";
import "./works.css";
import design3 from "../Works/design3.png";
import design2 from "../Works/design2.png";
import design1 from "../Works/design1.png";
import design4 from "../Works/design4.png";
import design6 from "../Works/design6.jpg";
import design5 from "../Works/design5.png";


const Works = () => {
  return (
    <section id='works'>
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">Through dedication and perseverance, I aim to refine my coding abilities and stay updated on emerging technologies and industry trends. With a passion for problem-solving and a keen eye for design, I am committed to delivering high-quality work that exceeds expectations. As I continue to hone my skills and expand my knowledge, I am excited to contribute my unique perspective and creativity to the ever-evolving world of web development.</span>
      <div className="worksImgs">
          <img src={design3} alt="img" className="worksImg" />
          <img src={design2} alt="img" className="worksImg" />
          <img src={design1} alt="img" className="worksImg" />
          <img src={design4} alt="img" className="worksImg" />
          <img src={design6} alt="img" className="worksImg" />
          <img src={design5} alt="img" className="worksImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;