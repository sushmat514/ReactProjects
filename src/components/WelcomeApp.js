import React, { Component } from 'react'
import './WelcomeApp.css'

export default class WelcomeApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       status:"Subscribe"
    }
  }
  
    
  onSubscribeClick(){
    console.log("sushma soujanya")
    this.setState({
      status : this.state.status === 'Subscribe' ? 'Subscribed':'Subscribe'
    })
  }
  render(){
   return (
      <div className="main-container">
        <>
        <h1 className = "heading">Welcome</h1>
        <h3>Thank you!Happy Learning</h3>
        <button onClick={()=>(this.onSubscribeClick())}  className="btn-styling">{this.state.status}</button>
        </>
        
      </div>
    )
  }
}