import React from 'react';
import { Link } from 'react-router';
import Sidebar from '../../component/sidebar/Sidebar';
import Project_SideBar from '../../component/Project_SideBar';
import './project-page.css'
function ProjectPage() {
  return (
    <>
    <div className="app-container">
    <Sidebar/>
    <div className="projects-container">
      <Project_SideBar/>
        <div className="projects-videos">
          <video src="/personal-portfolio/public/Projects-videos/ecommerce_with_superSimpleDev.mp4" controls></video>
          <div className="link-of-source-code">

          <Link to={'https://github.com/Ahsanulhaq01'}>GitHub</Link>
          </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default ProjectPage