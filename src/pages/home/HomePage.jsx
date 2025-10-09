import Sidebar from "../../component/sidebar/Sidebar"
import ContentPreview from "../../component/ContentPreview"

function HomePage() {
  return (
    <>
    <div className="app-container">
        <Sidebar/>
        <ContentPreview/>
    </div>
    </>
  )
}

export default HomePage