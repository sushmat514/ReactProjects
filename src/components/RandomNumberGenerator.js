import React, { Component } from 'react'
import './RandomNumberGenerator.css'
export default class RandomNumberGenerator extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value:0
    }
  }
  onGenerateHandler(){
    let num = Math.floor(Math.random()*100)
    this.setState({value:num})
  }
  render() {
    return (
      <div className="main-container">
        <div className="context-container">
            <h1>Random Number</h1>
            <p>Generate a random number in the range of 0 to 100</p>
            <button onClick={()=>{this.onGenerateHandler()}}>Generate</button>
            <h1>{this.state.value}</h1>
        </div>
      </div>
    )
  }
}
