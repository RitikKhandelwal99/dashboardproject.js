import React, {useState}from 'react'
import {useDispatch} from 'react-redux'
import {Qualification} from '../source/Reducers/fileSlice'
import {Link} from 'react-router-dom'


const Education = () => {
    const dispatch = useDispatch();
    const[todo,setTodo] = useState({
        degree:"",
        university:"",
        institutename:"",
        startyear:"",
        endyear:""
    })
    const pan = (event) => {
        const {name,value} = event.target
        setTodo({...todo, [event.target.name]: event.target.value})
    }
    const oneducation = (event) => {
        event.preventDefault();
        dispatch(Qualification(todo))
    }
    return(
        <>
        <div className='kio'>
        <img src="https://www.callcentrehelper.com/images/stories/2006/07/qualifications-760.jpg" height="320px" width="370px"/>
        </div>
        <div className="wes">
        <div className="dos">
        <label htmlFor='hos'>Degree:</label>
        <br/>
        <input type="text" placeholder="degree" name="degree" id="hos" onChange={pan} value={todo.degree}/>
        
        <div className="solid">
        <label htmlFor='host'>University:</label>
        <br/>
        <input type="text" placeholder="university" name="university" id="host" onChange={pan} value={todo.university}/>
        </div>
        <div className="solids">
        <label htmlFor='hosting'>InstituteName:</label>
        <br/>
        <input type="text" placeholder="institutename" name="institutename" id="hosting" onChange={pan} value={todo.institutename}/>
        </div>
        <div className="operation">
        <label htmlForm="startyear">StartYear:</label>
        <br/>
        <select name="startyear" id="startyear" placeholder="startyear" onChange={pan} value={todo.startyear}>
        <option value="startyear">StartYear</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        </select>
        </div>
        <div className="operations">
        <label htmlForm="endyear">EndYear:</label>
        <br/>
        <select name="endyear" id="endyear" placeholder="endyear" onChange={pan} value={todo.endyear}>
        <option value="endyear">EndYear</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        </select>
        </div>
    
        <div className="byes">
        <hr/>
        <button type="button" onClick={oneducation}>Save</button>
        <Link to="/personalinfo">
        <button type="button">Prev</button>
        </Link>
        <Link to ="/experience">
        <button type="button">Next</button>
        
        </Link>
        </div>
    
        

        </div>
        </div>
        </>
    )
}
export default Education