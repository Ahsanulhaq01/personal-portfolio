import React from 'react'
import { Link } from 'react-router'
import Sidebar from '../../../component/sidebar/Sidebar'
import Project_SideBar from '../../../component/Project_SideBar'
import '../project-page.css'
function Ecommerce() {
  return (
    <>
     <div className="app-container">
    <Sidebar/>
    <div className="projects-container">
      <Project_SideBar/>
        <div className="projects-videos">
          <video src="/personal-portfolio/Projects-videos/ecommerce_fronted.mp4" controls></video>
          <div className="link-of-source-code">

          <Link to={'https://github.com/Ahsanulhaq01/Intermediate-React-Project/tree/main/ecommerce-fronted'}>Source Code</Link>
          </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default Ecommerce