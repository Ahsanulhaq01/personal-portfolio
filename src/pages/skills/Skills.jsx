import React from 'react'
import { Link } from 'react-router'
import Sidebar from '../../component/sidebar/Sidebar'
import './skills.css'

function Skills() {
  return (
    <>
    <div className="app-container">

    <Sidebar/>
    <div className="skill-container">
      <div className="skill-box">
          <p className='tech-heading'>Programming Languages</p>
          <p className="tech-languages">C++, Python, Java , JavaScript, HTML, CSS</p>
      </div>
      <div className="skill-box">
          <p className='tech-heading'>FrameWork</p>
          <p className="tech-languages">React , Node , Express</p>
      </div>
      <div className="skill-box">
          <p className='tech-heading'>OtherSkill</p>
          <p className="tech-languages">Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Debugging, Version Control</p>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Skills