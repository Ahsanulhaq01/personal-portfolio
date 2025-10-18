import { Link } from 'react-router'
import './sidebar.css'
import {useState } from 'react'

function Sidebar() {
  const [isOpen , setIsOpen] = useState(false);
  function handleClose(){
    setIsOpen(!isOpen);

  }
  function handleOpen(){
    setIsOpen(!isOpen);
  }
  return (
    <>
    {/* <div className={`humbargar ${isOpen ? 'active' : ""}`}
    onClick={handleOpen}>
      <i
      className= {`fa-solid fa-bars`}>
    </i>
    </div> */}
    {isOpen ?<div className={`humbargar`}
    onClick={handleOpen}>
      <i
      className= {`fa-solid fa-bars`}>
    </i>
    </div> : <div className={`sidebar-container ${isOpen ? '' :'active'}`}>
      <div className={`icon-container`}>
        <i 
        onClick={handleClose}
        className= {"fa-solid fa-xmark"}>
        </i>

      </div>
        <div className="profile-image">
            <img src="/images/imrankhan.jpg" alt="profile-picture" />
            <Link to={'/'} className="name-container">
                Ahsanulhaq
            </Link>
        </div>
        <div className="other-pages-links-container">
            <Link to ="/college" className="college-name-page">College</Link>
            <Link to="/other-links" className="other-link-page">Other Links</Link>
            <Link to="/skills" className='skill-page'>Skills</Link>
            <Link to ="/project-page"className="project-page">Project-page</Link>
            <Link to="/contact" className="contact">Contact</Link>
            <Link to="/about" className="about">About</Link>

        </div>

    </div>}
    </>
  )
}

export default Sidebar