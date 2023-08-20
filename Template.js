import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {Link,Outlet} from 'react-router-dom'
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsChatRightFill} from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import {HiOutlineLocationMarker} from "react-icons/hi";
import { BsFillBookmarksFill } from "react-icons/bs";


const Template = () => {

  const detail = useSelector((state) => 
  state.detail
  );
  const file = useSelector((state) =>
  state.file
  );
  const dot = useSelector((state) => 
  state.dot
  );
  const keys = useSelector((state) => 
    state.keys
  )
  return(
    <>
    <h1> Template</h1>
    <p> choose the template</p>
    <div className="image">
     <Link to="/myresume">
     <img src = "https://www.myperfectresume.com/wp-content/uploads/2022/07/resume-builder-template-standout.svg" height="500px" width="500px" alt="Your Resume"/>
</Link>
</div>
<div className="nexts">
<img src="https://www.jobseeker.com/api/media/documents/1cdf7944-6cab-4422-8b39-7ee580688d78/Resume-example-Circulair.1688983569143.svg" height="500px" width="500px"/>
</div>

<div className="ck">
<h2><span style={{color:'green', fontStyle:'italic'}}>{detail.fname}</span></h2>
<hr/>
<br/><br/>
<div className="sy">
<p>Contact:</p>
<hr/>

<p><AiFillPhone/>{detail.phonenumber}</p>
<p>{detail.linkdlin}</p>
<p><BsFillBookmarksFill/>{detail.email}</p>
<p><HiOutlineLocationMarker/>{detail.address}</p>

<div className="social">
   <p>KeySkill</p>
   <hr/>
   </div>
   <br/>
   <div className="ohs">
   <ol>
  <li><p>{keys.javascript}</p></li>
  <li> <p>{keys.python}</p></li>
   <li><p>{keys.node}</p></li>
   <li><p>{keys.react}</p></li>
  </ol>
   </div>
   </div>
<div className="hello">
<h4>EXPERIENCE</h4>
<hr/>
</div>
<hr/>
<div className="hand">
<p>OrganizationName:{dot.organizationname}</p>

<p>CompanyName:{dot.companyname}</p>

<p>StartYear:{dot.startyear}</p>

<p>EndYear:{dot.endyear}</p>

</div>


<div className="quast">
<h4>EDUCATION</h4>
<hr/>
</div>
<div className="manisha">
<p>Degree: {file.degree}</p>
<p>University: {file.university}</p>
<p>InstituteName: {file.institutename}</p>
<p>StartYear: {file.startyear}</p>
<p>EndYear: {file.endyear}</p>
</div>

   </div>




    





    </>
  )
}
export default Template