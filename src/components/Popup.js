import React from "react"
import './Popup.css'
import Innerdata from './Innerdata'

const Popup = (props) => {
   

    return(
      <div className="popup--back">
        <div className="popup--content">
            
            <div className="popup--close" onClick={props.closePopup}>x</div>
            <Innerdata/>
        </div>
      </div>
    )
  }
  
  
  export default Popup;