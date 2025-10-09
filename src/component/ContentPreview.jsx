import React from 'react'

function ContentPreview() {
  return (
   <>
   <div className="content-preview-container">
        <div className="text-container">
            <div className="name-container">
                <p className="pronoun">I am </p>
                <p className="intro">Ahsanulhaq</p>
            </div>
        </div>
        <div className="preview-container">
            <div className="graphic-container">
                <img src="../../public/images/imrankhan.jpg" alt="" />
                <p className="graphic-container-text">
                  👋 Hi, I'm Ahsan Ul Haq, a Software Engineering student currently learning web development.
I’ve completed the frontend part and am now exploring backend development to understand how everything works together.
Alongside that, I’m also learning Data Structures and Algorithms (DSA) because I’m deeply interested in improving my problem-solving and programming skills.
                </p>
            </div>
        </div>
    </div>
   </>
  )
}

export default ContentPreview