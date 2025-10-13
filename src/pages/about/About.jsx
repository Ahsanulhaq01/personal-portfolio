import Sidebar from "../../component/sidebar/Sidebar";
import './about.css'
function About() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="about-me-container">
            <div className="text-about-me">
              <p className="about-me-para">
                Hi, I’m Ahsan Ul Haq — a Software Engineering student who enjoys turning ideas into real, working digital products.

I’m currently learning web development, exploring backend technologies, and improving my skills in C++, Python, and JavaScript. I’m also interested in cybersecurity and DSA to strengthen my technical foundation.

My goal is to build practical, impactful projects and keep growing as a developer. I love learning new technologies and finding creative ways to solve problems.

I’m always open to learning, collaboration, and new opportunities — feel free to connect with me!
              </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default About;
