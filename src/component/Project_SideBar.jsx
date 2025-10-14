import { Link } from 'react-router';
function Project_SideBar() {
  return (
    <>
    <div className="project-box">
        <div className="project-name">
         <Link to ="/Ecommerce-With-SuperSimpleDev" className="college-name-page">Ecommerce With Simon Bao</Link>
         <Link to ="/chatbot-with-simon" className="college-name-page">ChatBot With Simon Bao</Link>
         <Link to ="/blog" className="college-name-page">Blog</Link>
         <Link to ="/Ecommerce" className="college-name-page">Ecommerce</Link>
        </div>
      </div>
    </>
  )
}

export default Project_SideBar