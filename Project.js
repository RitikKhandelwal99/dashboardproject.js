import React from 'react'
import index from './index.css'

const Project = ()  => {
  return (
    <>
    <div className="koe">
    <h2>Project</h2>
    <div className='pros'>
    <ul>
    <li>Resume Builder (React,Redux)</li>
    <br/>
    <li>Quiz Competition (React,Redux)</li>
    <br/>
    <li>Book MyShow (React,Node.js)</li>
    <br/>
    <li>Ecommerce (React,Redux)</li>
    </ul>
    </div>

    </div>
    <div className="imkes">
    <img src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg" height="580px" width="520px"/>
    </div>
    <div className="resus">
    
    <img src="https://www.resumebuilder.com/wp-content/themes/resumebuilder/assets/images/desktop-with-resume-.svg" height="330px" width="430px"/>
    <p>In Resume Builder use personal info<br/>
      education detail , work experience <br/>
      keyskill. using react </p>
      <button type="button" className="btn btn-danger">More Detail</button>
    </div>
    <div className="resu">
    <img src="https://kidscareschool.org.in/wp-content/uploads/2016/11/images-11-1.png" height="330px" width="440px"/>
    <p>In the Quiz Competition to choose<br/>
     choose any one answer (using  react,redux) </p>
     <button type="button" className="btn btn-danger">More Detail</button>
     </div>
     <div className="ject">
     <img src="https://img.freepik.com/free-vector/illustrated-online-marketing-web-page-template_79603-1015.jpg" height="330px" width="440px"/>
     <p>Ecommerce Website to use wishlist <br/>
     and Add ToCart the product (using Redux) </p>
     <button type="button" className="btn btn-danger">More Detail</button>
     </div>
     <div className="books">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRg3E_wYcPbheCmQh2F2YBwb8agUwxpaZfxZ1JFsUMlg&s" height='330px' width="440px"/>
     <p>Book My Show to store the data in the <br/>
     mongodb. Book the ticket,seat </p>
     </div>



    
    </>
  )
}

export default Project
