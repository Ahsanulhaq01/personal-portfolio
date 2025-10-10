import ContentPreview from "../../component/ContentPreview"
import Sidebar from "../../component/sidebar/Sidebar"

function College() {
  return (
    <>
    <div className="app-container">
      <Sidebar/>
       <div className="content-preview-container">
        <div className="text-container">
            <div className="name-container">
                <p className="pronoun">Islamia</p>
                <p className="intro"> College Peshawar</p>
            </div>
        </div>
        <div className="preview-container">
            <div className="graphic-container">
                <img src="/images/islamia-college-peshawar.jpg" alt="" />
                <p className="graphic-container-text">                  
Islamia College Peshawar, founded in 1913, is one of the most respected and historic educational institutions in Pakistan. It provides a strong academic environment that helps students grow in knowledge, discipline, and character. I’m proud to be part of this institution and its rich legacy.
                </p>
            </div>
        </div>
    </div>
    </div>
   
    </>
  )
}

export default College