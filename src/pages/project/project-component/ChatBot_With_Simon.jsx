import React from 'react'
import { Link } from 'react-router'
import Sidebar from '../../../component/sidebar/Sidebar'
import Project_SideBar from '../../../component/Project_SideBar'
import '../project-page.css'

function ChatBot_With_Simon() {
  return (
    <>
     <div className="app-container">
    <Sidebar/>
    <div className="projects-container">
      <Project_SideBar/>
        <div className="projects-videos">
          <video src="/Projects-videos/Chatbot_with_superSimpleDev.mp4" controls></video>
          <div className="link-of-source-code">

          <Link to={'https://github.com/Ahsanulhaq01/Intermediate-React-Project/tree/main/Chatbot_in_react/'}>Source Code</Link>
          </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default ChatBot_With_Simon