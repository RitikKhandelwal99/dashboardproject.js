import React, {Link,Outlet} from 'react-router-dom'
import style from './style.css'


const ResumeBuilder = () => {
    return(
        <>
       
        <nav>
        <div className="ok">
        <Link to="/template">Template</Link>
        <hr/>
        <Link to="/myresume">MyResume</Link>
        <hr/>
        <Link to="/personalinfo">PersonalInfo</Link>
        <hr/>
        <Link to="/education">Education</Link>
        <hr/>
        <Link to="/experience">Experience</Link>
        <hr/>
        <Link to="/keyskill">KeySkill</Link>
        </div>
        </nav>
        <Outlet/>
        </>
    )
}
export default ResumeBuilder