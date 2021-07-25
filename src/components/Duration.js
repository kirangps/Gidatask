import React from 'react'
import Graphics1 from "./Graphics1.gif"
import '../App.css'
import './Duration.css'
import { Dialog } from '@material-ui/core'
import tachyons from 'tachyons'

const Duration=()=>{
    
    setInterval(()=>{
        let gif=document.getElementById('anim_gif')
            gif.className="disappear";
    },15000) 
    return(
       <div className="tc bg-light-green grow shadow-5">
        <img src={Graphics1} id="anim_gif" style={{height:"400px",width:"400px"}}></img>
      </div>
    )
}
export default Duration