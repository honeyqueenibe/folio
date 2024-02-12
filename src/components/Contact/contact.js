import React, { useRef } from 'react';
import "./contact.css";
import Cd from "./Cd.png";
import Tok from "./Tok.png";
import Mr from "./Mr.png";
import Grande from "./Grande.png";
import Fb from "./Fb.png";
import Ig from "./Ig.png";
import Twitter3 from "./Twitter3.png";
import Ytube from "./Ytube.png";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5y2kgrj', 'template_ew52lec', form.current, {
        publicKey: '79ksvFGQdVwnAlkUB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
          <h1 className="contactPageTitle">My Clients</h1>
          <p className="clientDesc">I have had the opportunity to work with a diverse group of companies. Some of the notable companies i have worked with includes</p>
          <div className="clientImgs">
              <img src={Cd} alt="client" className="clientImg" />
              <img src={Tok} alt="client" className="clientImg" />
              <img src={Mr} alt="client" className="clientImg" />
              <img src={Grande} alt="client" className="clientImg" />
          </div>
      </div>
      <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name='your_name'></input>
            <input type="text" className="email" placeholder="Your Email" name='your_email'></input>
            <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
            <button type="submit" value="send" className='submitBtn'>Submit</button>
            <div className="links">
              <img src={Fb} alt="" className="link" />
              <img src={Ig} alt="" className="link" />
              <img src={Twitter3} alt="" className="link" />
              <img src={Ytube} alt="" className="link" />
            </div>
          </form>
      </div>

    </section>
  );
}

export default Contact;