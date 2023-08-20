import React,{useState} from 'react'
import {work} from '../source/Reducers/workexpSlice'
import {useDispatch} from 'react-redux'
import index from './index.css'
import {Link} from 'react-router-dom'

const Experience = () => {
    const dispatch = useDispatch();

    const[Pem,setPem] = useState({
        organizationname:"",
        companyname:"",
        startyear: "",
        endyear:""
    })

    const toster = (event) => {
        const {name,value} = event.target
        setPem({...Pem, [event.target.name]: event.target.value})
    }
    const oyos = (event) => {
      event.preventDefault();
      dispatch(work(Pem))
    }
    return(
        <>
        <div className="ear">
        <img src="https://img.jagranjosh.com/imported/images/E/Articles/imp-of-work-ex.jpg" height="320px" width="320px"/>
        </div>

        <div className="ous">
        <div className="pl">
        <label htmlFor='er'>Organization Name:</label>
        <br/>
        <input type="text" placeholder="organizationname" id="er" name="organizationname" onChange={toster} value={Pem.organizationname}/>
        </div>
        <div className="soe">
        <label htmlFor='ers'>Company Name:</label>
        <br/>
        <input type="text" placeholder="companyname" id="ers" name="companyname" onChange={toster} value={Pem.companyname}/>
        </div>
        <div className="operatings">
        <label htmlForm="startyear">StartYear:</label>
        <br/>
        <input type="text" placeholder="startyear"  name="startyear" id="soja" onChange={toster} value={Pem.startyear}/>
        </div>

    
        <div className="tarun">
        <label htmlFor='soja'>EndYear:</label>
        <br/>
        <input type="text" placeholder="endyear"  name="endyear" id="sojas" onChange={toster} value={Pem.endyear}/>
        </div>
        <div className="sosoe">
        <Link to="/education">
        <button type="button">Prev</button>
        </Link>
        
        <button type="button" onClick={oyos}>Save</button>
        <Link to="/keyskill">
        <button type="button">Next</button>
        </Link>
        </div>
        </div>
        
        </>
    )
}
export default Experience