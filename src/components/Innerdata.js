import React,{useState} from 'react'
import Gida from './Gida.jpg'
import './Style.css'
//import Kiran from "./Kiran.gif"
import Kiran from "./Kiran.png"
import '../App.css'
import Duration from './Duration'
import {Link} from 'react-router-dom'



const Innerdata=()=>{
    const[Gif,setGif]=useState(false);
    const[Graph,setGraph]=useState(false);
    // const [showDialog, setShowDialog] = React.useState(false);
    // const open = () => setShowDialog(true);
    // const close = () => setShowDialog(false);

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
            <Link to="/Gif"> <button onClick={gifFunc} style={{backgroundColor:"antiguewhite",fontSize:"20px",padding:"10px 60px",margin:"20px 0px",borderRadius:"15px"}} >GIF ANIMATION</button>
           </Link>           
                     
            <Link to="/Graph">
            <button onClick={graphFunc} style={{backgroundColor:"khaki",fontSize:"20px",padding:"10px 60px",margin:"20px 0px",borderRadius:"15px"}}>GRAPH</button>
            </Link>
            {Gif ? <Duration/> : null}
            {Graph ? <img src={Kiran} style={{height:"auto",width:"400px",margin:"20px"}}></img>:null}
        </div>
    )
}
export default Innerdata