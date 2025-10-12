import React from 'react'
import { Link } from 'react-router'
import Sidebar from '../../../component/sidebar/Sidebar'
import '../project-page.css'
function EcommerceWithSimon() {
  return (
    <>
    <div className="app-container">
    <Sidebar/>
    <div className="projects-container">
      <div className="project-box">
        <div className="project-name">
         <Link to ="/Ecommerce-With-SuperSimpleDev" className="college-name-page">Ecommerce With Simon Bao</Link>
         <Link to ="/chatbot-with-simon" className="college-name-page">ChatBot With Simon Bao</Link>
         <Link to ="/blog" className="college-name-page">Blog</Link>
         <Link to ="/Ecommerce" className="college-name-page">Ecommerce</Link>
        </div>
      </div>
        <div className="projects-videos">
          <video src="/Projects-videos/ecommerce_with_superSimpleDev.mp4" controls></video>
          <div className="link-of-source-code">

          <Link to={'https://github.com/Ahsanulhaq01/Ecommerce-project'}>Source Code</Link>
          </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default EcommerceWithSimon