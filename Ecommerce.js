import React,{useState,useEffect} from 'react'
import Product from './Product'
import {Link,Outlet} from 'react-router-dom'

const Ecommerce = () => {
 
  

    
  
  return (
    <>
    <div className="lol">
    <div className="iol">
    <div className="card">
  <img className="card-img-top" src="https://thumbs.dreamstime.com/b/big-data-center-analyzes-data-science-background-presentation-big-data-center-analyzes-data-science-background-159196598.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Data Science</h5>
    <h6 className="card-Price">Price: 17000</h6>
    <p className="card-text">Data science is a field of applied mathematics and statistics.</p>
    
    <button className="btn btn-primary">Add To Cart</button>
    
  
    </div>
    </div>
    </div>
    </div>
    
    <div className="sopk">
    <div className="card">
  <img className="card-img-top" src="https://e1.pxfuel.com/desktop-wallpaper/574/84/desktop-wallpaper-net-full-stack-developer-full-stack-thumbnail.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Full Stack Web developer</h5>
    <h6 className="card-Price">Price: 25000</h6>
    <p className="card-text">A full stack web developer is a person who can develop both client and server software.</p>
    


    <button className="btn btn-primary">Add To Cart</button>
    </div>
    </div>
    </div>
    <div className="shopy">
    <div className="card">
  <img className="card-img-top" src="https://e1.pxfuel.com/desktop-wallpaper/574/84/desktop-wallpaper-net-full-stack-developer-full-stack-thumbnail.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Python</h5>
    <h6 className="card-Price">Price: 16000</h6>
    <p className="card-text">A full stack web developer is a person who can develop both client and server software.</p>
    <button className="btn btn-primary">Add To Cart</button>
    </div>
    </div>
    </div>
  
  
    </>
  )
  } 

export default Ecommerce
