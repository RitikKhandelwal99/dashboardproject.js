import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ResumeBuilder from './Component/ResumeBuilder'
import Blogs from './Component/Blogs'
import Ecommerce from './Component/Ecommerce'

import Home from './Component/Home'
import About from './pages/About'


import CollegeEvents from './Component/CollegeEvents'
import StudentPortfolio from './Component/StudentPortfolio'


import Template from './pages/Template'
import MyResume from './pages/MyResume'
import PersonalInfo  from './pages/PersonalInfo'
import Education from './pages/Education'
import Experience from './pages/Experience'
import KeySkill from './pages/KeySkill'
import PortFolioPage from './tester/PortfolioPage'
import Qualification from './tester/Qualification'
import Project  from './tester/Project'
import WorkExperience from './tester/WorkExperience'
import Quiz from './components/Quiz'

import NavBar from './Component/NavBar'




const App = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<NavBar/>}>
    
        <Route index element={<Home/>}/>
        <Route path="resumebuilder" element={<ResumeBuilder/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="ecommerce" element={<Ecommerce/>}/>


        <Route path="collegeevents" element={<CollegeEvents/>}/>
        <Route path="studentportfolio" element={<StudentPortfolio/>}/>
        
        <Route path="template" element={<Template/>}/>
        <Route path="myresume" element={<MyResume/>}/>
        <Route path="personalinfo" element={<PersonalInfo/>}/>
        <Route path="education" element={<Education/>}/>
        <Route path="experience" element={<Experience/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="keyskill" element={<KeySkill/>}/>
        <Route path="portfoliopage" element={<PortFolioPage/>}/>
        <Route path="qualification" element={<Qualification/>}/>
       <Route path="project" element={<Project/>}/>
       <Route path="WorkExperience" element={<WorkExperience/>}/>
       <Route path="Quiz" element={<Quiz/>}/>
       
       
       </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App
