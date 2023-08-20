import React,{useState} from 'react'
import index from './index.css'
import {useDispatch} from 'react-redux'
import {AddTodo} from '../source/Reducers/userSlice'
import {Link} from 'react-router-dom'

const PersonalInfo = ()  => {
    const dispatch = useDispatch();
    const[todo,setTodo] = useState({
        fname: "",
        lname: "",
        email: "",
        phonenumber: "",
        address: ""
    }) 
    const yu = (event) => {
        const {name,value} = event.target;
        setTodo({...todo, [event.target.name]: event.target.value})

    }
    const onPersonal = (event) => {
        event.preventDefault();
        dispatch(AddTodo(todo))
    }
    
  return (
    <>
    <div className="pinku">
    <img src="https://media.istockphoto.com/id/1358091848/photo/corporate-data-management-system-and-document-management-system-with-employee-privacy.jpg?s=612x612&w=0&k=20&c=STm4rk-rTAGtjfd1OqFlHrRgUweQNSHtxl03uqhU5II=" height="430px" width="280px"/>
    </div>
    <div className="nop">
    <div className="pest">
    <label htmlFor='io'>FirstName: </label>
    <br/><br/>
    <input type="text" placeholder="fname" name="fname" id="io" onChange={yu} value={todo.fname}/>
    </div>
    <div className="noise">
    <label htmlFor='ios'>Linkdlin Id: </label>
    <br/><br/>
    <input type="text" placeholder="linkdlin" name="linkdlinid" id="ios" onChange={yu} value={todo.linkdlinid}/>
    </div>
    <div className="jok">
    <label htmlFor='pm'>Email: </label>
    <br/><br/>
    <input type="text" placeholder="email" id="pm" name="email" onChange={yu} value={todo.email}/>
    </div>
    <div className="joke">
    <label htmlFor='pms'>PhoneNumber: </label>
    <br/><br/>
    <input type="text" placeholder="phonenumber" id="pms"  name="phonenumber" onChange={yu} value={todo.phonenumber}/>
    </div>

    <div className="nj">
    <label htmlFor='ero'>Address:</label>
    <br/><br/>
    <input type="text" placeholder="address" id="ero"  name="address" onChange={yu} value={todo.address}/>
    </div>
    
    <div className="btn-9">
    <hr/>
    <button type="button" onClick={onPersonal}>save</button>
    <Link to="/education">
   <button type="button">Next</button>
   </Link>
   </div>
    </div>
   

  
    
      </>
    
  )
}

export default PersonalInfo
