import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import { Link } from 'react-router';
import './contact.css';

function Contact() {
  return (
   <>
   <div className="app-container">

   <Sidebar/>
   <div className="contact-container">
      <div className="contact-me-para">
        <p className="contact-me-text">
          Contact Me
        </p>
      </div>
      <div className="short-intro">
        <p className="intro">I’m always open to discussing new projects,
creative ideas, or opportunities to collaborate.</p>
      </div>
      <div className="form-container">
        <div className="name-box">
          <label htmlFor="name">Name : </label>
        <input type="text" id='name' placeholder='Enter your name' />
        </div>
        <div className="email-box">
          <label htmlFor="email">Email : </label>
        <input type="text" placeholder='Enter Your email' id='email' />
        </div>
        <div className="message-box">
          <label htmlFor="message">Message : </label>
        <textarea name="message" id="message"placeholder='Enter your message'></textarea>
        </div>
        
        <button className='send-msg'>Send Message</button>
      </div>
      <div className="social-link">
        <Link to={'https://x.com/ulhaqcdr'} target='_blank'>X or Twitter</Link>
        <Link to={'https://www.linkedin.com/in/ahsan-ulhaq-8581a82ba/'} target='_blank'>LinkedIn</Link>
        
      </div>
   </div>
   </div>
   </>
  )
}

export default Contact