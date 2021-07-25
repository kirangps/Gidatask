import React,{useState} from "react"
import Innerdata from "./Innerdata"
import tachyons from 'tachyons'
import '../App.css'
import {Link} from 'react-router-dom'


const Button =()=>{
    const[Click,setClick]=useState(false);
    const HandlerClick=()=>{
        setClick(!Click);
        console.log(Click);
    }

    return(
    <div className="tc">
         <Link to="/popup"><button onClick={HandlerClick} style={{backgroundColor:"darkgrey",fontSize:"20px",padding:"10px 60px",borderRadius:"15px",marginBottom:"15px"}}>Click Me!!</button></Link>
         {Click ? <Innerdata/> : null}
    </div>
    )   
}
export default Button