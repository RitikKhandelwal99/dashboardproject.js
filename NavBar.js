import {Link,Outlet} from 'react-router-dom'
import style from './style.css'




const NavBar = () => {
    return(
        <>
        <nav>
        <div className="nav-link">
        
       <Link to="/" className="nas">Home</Link>
       <div className="dropdown">
  <Link className="dropbtn">ResumeBuilder</Link>
  <div className="dropdown-content">
  <Link to= '/about'>About</Link>
  <Link to="/template">Template</Link>
  <Link to="/myresume">MyResume</Link>
  
  </div>
</div>
        
        
        


    
        <Link to="/blogs" className="nas">Blogs</Link>
        
        <Link to="/ecommerce" className="nas">Ecommerce</Link>
        <div className="dropdown">
        <button className="dropbtn">CollegeEvents</button>
        <div className="dropdown-content">
        <Link to="/Quiz">QuizCompetition</Link>
        </div>
        </div>


        

        <div className="dropdown">
        <button className="dropbtn">StudentPortfolio</button>
        <div className="dropdown-content">
        <Link to="/portfoliopage">PortFolioPage</Link>
        <Link to="/qualification">Qualification</Link>
        <Link to="/workexperience">WorkExperience</Link>
        <Link to="/project">Project</Link>
        
        
        
        </div>
        </div>
     
 

        
        


        
        </div>

         </nav>
         <Outlet/>
      
         </>
    )
    
}

export default NavBar