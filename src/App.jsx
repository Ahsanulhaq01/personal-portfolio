import { Route , Routes } from 'react-router'
import College from './pages/college/College'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Skills from './pages/skills/Skills'
import ProjectPage from './pages/project/ProjectPage'
import OtherLinks from './pages/other-links/OtherLinks'
import EcommerceWithSimon from './pages/project/project-component/EcommerceWithSimon'
import Ecommerce from './pages/project/project-component/Ecommerce';
import Blog from './pages/project/project-component/Blog'
import ChatBot_With_Simon from './pages/project/project-component/ChatBot_With_Simon'

import HomePage from './pages/home/HomePage'
import './App.css'

function App() {
  return (
   <Routes>
   <Route index element={<HomePage/>}></Route>
    <Route path='/college' element={<College/>}></Route>
    <Route path='/other-links' element={<OtherLinks/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about'element={<About/>} ></Route>
    <Route path='/project-page' element={<ProjectPage/>}></Route>
    <Route path ='/Ecommerce-With-SuperSimpleDev' element={<EcommerceWithSimon/>}></Route>
    <Route path='/chatbot-with-simon' element={<ChatBot_With_Simon/>}></Route>
    <Route path='/Ecommerce' element={<Ecommerce/>}></Route>
    <Route path='/blog' element={<Blog/>}></Route>
   </Routes>
  )
}

export default App