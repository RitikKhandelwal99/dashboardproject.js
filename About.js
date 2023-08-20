import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import index from './index.css'

const About = () => {
  return (
    <>
    
    <div className="pop">
    <Link to="/personalinfo"  className="nus">PersonalInfo</Link>
    <hr/>
    <Link to="/education" className="nus">Education</Link>
    <hr/>
    <Link to="/experience" className="nus">Experience</Link>
    <hr/>
    <Link to="/keyskill" className="nus">KeySkill</Link>


      
    </div>
    <div className="shree">
    <img src="https://png.pngtree.com/element_pic/16/05/27/00574724995a408.jpg" height="330px" width="330px"/>
    </div>
    </>
  )
}

export default About
