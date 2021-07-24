import React,{useState} from 'react'
import Gida from './Gida.jpg'
import './Style.css'
//import Kiran from "./Kiran.gif"
import Kiran1 from "./Kiran1.gif"
import '../App.css'
import Duration from './Duration'


const Innerdata=()=>{
    const[Gif,setGif]=useState(false);
    const[Graph,setGraph]=useState(false);

    const gifFunc=()=>{
        console.log('Gif'); 
        setGif(!Gif);
    }
    const graphFunc=()=>{
        console.log('Graph');
        setGraph(!Graph);
    }

    return(
        <div className='container'>
            <img src={Gida} alt="Image" style={{height:"200px",width:"200px"}}></img>
            <button onClick={gifFunc} style={{backgroundColor:"salmon",fontSize:"20px",padding:"10px 60px",margin:"20px 0px",borderRadius:"15px"}} >GIF ANIMATION</button>
            <button onClick={graphFunc} style={{backgroundColor:"dodgerblue",fontSize:"20px",padding:"10px 60px",margin:"20px 0px",borderRadius:"15px"}}>GRAPH</button>
            {Gif ? <Duration/> : null}
            {Graph ? <img src={Kiran1} style={{height:"auto",width:"400px",margin:"20px"}}></img>:null}
        </div>
    )
}
export default Innerdata