import React, { Component } from 'react'
import './HideShowApp.css'
export default class HideShowApp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        statusFirstName: false,
        statusLastName: false
      }
    }
    onHideShowFirstName(){
        this.setState({
            statusFirstName: this.state.statusFirstName ? false: true
        })
    }
    onHideShowLastName(){
        this.setState({
            statusLastName : this.state.statusLastName ? false: true
        })
    }
  render() {
    return (
      <div className="background-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="container">
            <div className='names-container'>
                <button onClick={()=>(this.onHideShowFirstName())}>Show/Hide Firstname</button>
                {this.state.statusFirstName && <p>Sushma</p>} 
            </div>
            <div className='names-container'>
                <button onClick={()=>(this.onHideShowLastName())}>Show/Hide Lastname</button>
                {this.state.statusLastName && <p>Tirumalasetti</p>}
            </div>
        </div>
        
        {/* <div className="names-container">
            
           
        </div> */}
        
      </div>
    )
  }
}
