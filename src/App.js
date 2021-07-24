import React, { Component } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'
import './App.css'
import Particles from 'react-particles-js'

const particlesEffect ={
 
    particles: {
      number :{
        value: 10,
        density:{
          enable:true,
          value_area:30
       }
      }
    }
 }
 class App extends Component {
    render(){
    return (
      <div className="contain">
        <Particles params={particlesEffect} className="particles"/> 
        <Header/>
        <Button/>
		<Footer/>
      </div>
    )
}
}

export default App
