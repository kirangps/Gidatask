import React from 'react'
import Graphics from "./Graphics.gif"
import '../App.css'
import './Duration.css'

const Duration=()=>{
    // const Iteration=()=>{
    //     return(
    //        //alert('Hi')
    //        <h1>Hello!!</h1>
    //     )
    // }
    setInterval(()=>{
        let gif=document.getElementById('anim_gif')
            gif.className="disappear";
    },15000)
    return(
        
        <img src={Graphics} id="anim_gif" style={{height:"400px",width:"400px"}}></img>
     
    )
}
export default Duration