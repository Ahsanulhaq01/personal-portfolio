import React from 'react'
import { Link } from 'react-router'
import Sidebar from '../../../component/sidebar/Sidebar'
import Project_SideBar from '../../../component/Project_SideBar'
import '../project-page.css'

function Blog() {
  return (
    <>
    <div className="app-container">
    <Sidebar/>
    <div className="projects-container">
            <Project_SideBar/>
        <div className="projects-videos">
          <video src="/personal-portfolio/public/Projects-videos/blog_app.mp4" controls></video>
          <div className="link-of-source-code">

          <Link to={'https://github.com/Ahsanulhaq01/Intermediate-React-Project/tree/main/blog'}>Source Code</Link>
          </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default Blog