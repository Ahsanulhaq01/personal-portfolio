import { Route , Routes } from 'react-router'
import College from './pages/college/College'
import About from './pages/about/About'
import Languages from './pages/languages/Languages'
import Skills from './pages/skills/Skills'
import ProjectPage from './pages/project/ProjectPage'
import OtherLinks from './pages/other-links/OtherLinks'

import HomePage from './pages/home/HomePage'
import './App.css'

function App() {
  return (
   <Routes>
   <Route index element={<HomePage/>}></Route>
    <Route path='/college' element={<College/>}></Route>
    <Route path='/other-links' element={<OtherLinks/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='/language' element={<Languages/>}></Route>
    <Route path='/about'element={<About/>} ></Route>
    <Route path='/project-page' element={<ProjectPage/>}></Route>
   </Routes>
  )
}

export default App