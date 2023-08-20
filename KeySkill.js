import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {skilled} from '../source/Reducers/keySlice'
import {Link} from 'react-router-dom'

const KeySkill = () => {
  const dispatch = useDispatch();
  const[term,setTerm] = useState({
    python: "",
    javascript:"",
    
    node:"",
    react:""
  })

  const kru = (event) => {
    const {name,value} = event.target;
    setTerm({...term,[event.target.name]: event.target.value})

  }
  const onTemp = (event) => {
    event.preventDefault();
    dispatch(skilled(term))

  }

  return (
    <>
    <div className="polo">
    <img src="https://imageio.forbes.com/specials-images/imageserve/630317507c39bc12ccfa8c6c/The-Top-10-Most-In-Demand-Skills-For-The-Next-10-Years/960x0.jpg?height=473&width=711&fit=bounds" height="330px" width="330px"/>
    </div>
    <div className="xolo">
    <div className="impo">
     <input type="text" placeholder="javascript" id="tp" name="javascript" onChange={kru} value={term.javascript}/>
     </div>
     <div className="ret">
     <input type="text" placeholder="python" id="tps" name="python" onChange={kru} value={term.python}/>
      </div>
      <div className="sorry">
      <input type="text" placeholder="node" id="tpr" name="node" onChange={kru} value={term.node}/>
    </div>
    <div className="sosorry">
    <input type="text" placeholder="React" id="tprs" name="react" onChange={kru} value={term.react}/>
    </div>
    <div className="coms">
    <hr/>
    <Link to="/experience">
    
    <button type="button">Prev</button>
    </Link>
    <button type="button" onClick={onTemp}>Save</button>
    </div>
    
    </div>

    
  </>
  )
}

export default KeySkill
