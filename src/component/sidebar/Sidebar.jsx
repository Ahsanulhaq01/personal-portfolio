import { Link } from 'react-router'
import './sidebar.css'

function Sidebar() {
  return (
    <>
     <div className="sidebar-container">
        <div className="profile-image">
            <img src="../../public/images/imrankhan.jpg" alt="profile-picture" />
            <Link to={'/'} className="name-container">
                Ahsanulhaq
            </Link>
        </div>
        <div className="other-pages-links-container">
            <Link to ="/college" className="college-name-page">College</Link>
            <Link to="/other-links" className="other-link-page">Other Links</Link>
            <Link to="/skills" className='skill-page'>Skills</Link>
            <Link to ="/project-page"className="project-page">Project-page</Link>
            <Link to="/language" className="language">Languages</Link>
            <Link to="/about" className="about">About</Link>

        </div>

    </div>
    </>
  )
}

export default Sidebar