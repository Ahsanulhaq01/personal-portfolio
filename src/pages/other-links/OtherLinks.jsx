import Sidebar from '../../component/sidebar/Sidebar';
import './links.css'
import { Link } from 'react-router';

function OtherLinks() {
  return (
    <>
    <div className="app-container">

    <Sidebar/>
    <div className="links-container">
      <div className="leetcode-container link">
        <img src="/personal-portfolio//images/leetcode.jpg" alt="" />
        <div className="link-text-container">
          <p className='platform-name'>LeetCode</p>
          <Link to={'https://leetcode.com/u/Ahsanulhaq01/'} target="_blank" rel="noopener noreferrer">@Ahsanulhaq01</Link>
        </div>
      </div>
      <div className="github-container link">
        <img src="/personal-portfolio/images/twitter.jpg" alt="" />
        <div className="link-text-container">
          <p className='platform-name'>X (twitter)</p>
          <Link to={'https://x.com/ulhaqcdr'}  target="_blank" rel="noopener noreferrer">@ulhaqcdr</Link>
        </div>
      </div>
      <div className="twitter-container link">
        <img src="/personal-portfolio/images/linkedin.png" alt="" />
        <div className="link-text-container">
          <p className='platform-name'>LinkedIn</p>
          <Link to={'https://www.linkedin.com/in/ahsan-ulhaq-8581a82ba/'}  target="_blank" rel="noopener noreferrer">@Ahsanulhaq</Link>
        </div>
      </div>
      <div className="LinkedIn-container link">
        <img src="/personal-portfolio/images/github.png" alt="" />
        <div className="link-text-container">
          <p className='platform-name'>GitHub</p>
          <Link to={'https://github.com/Ahsanulhaq01'} target="_blank" rel="noopener noreferrer">@Ahsanulhaq01</Link>
        </div>
      </div>
    </div>
    </div>

    </>
  )
}

export default OtherLinks