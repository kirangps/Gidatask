import React, { Component } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'
import './App.css'
import image from './image.jpg'
import {Route, Switch} from 'react-router-dom'
import Popup from './components/Popup'
import Innerdata from './components/Innerdata'
import Duration from './components/Duration'
import Graph from './components/Graph'




 class App extends Component {
    render(){
    return (
       <div id="contain">
       <div>
        <Header/>
        {/* <Button/> */}
       <Switch>
         <Route exact path="/" component={Button}/>
       <Route exact path="/popup" component={Popup}/>
        <Route  path="/Gif" component={Duration}/>
        <Route  path="/Graph" component={Graph}/>
       </Switch>
       	<Footer/>
      </div>
      </div>
    )
}
}

export default App
