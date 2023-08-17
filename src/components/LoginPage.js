import React, { Component } from 'react'
import './LoginPage.css'
export default class LoginPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    onLoginHandler(){
        this.setState({isLoggedIn:this.state.isLoggedIn?false:true})
    }
  render() {
    return (
    <div className='main-container'>
      <div className='child-container'>
        <div className="sub-container">
            <h1>{this.state.isLoggedIn?"Welcome User":"Please Login"}</h1>
            <button onClick={()=>{this.onLoginHandler()}}>{this.state.isLoggedIn?"Logout":'Login'}</button>
        </div>
        
      </div>
    </div>
    )
  }
}
