import React, { Component } from 'react'
import './SpeedoMeter.css';
export default class SpeedoMeter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         speed:0
      }
      this.onIncrement = this.onIncrement.bind(this)
      this.onDecrement = this.onDecrement.bind(this)
    }
    onIncrement(){
        if (this.state.speed >=0 && this.state.speed <200){
            this.setState((prevState)=>({speed:prevState.speed+10}))
        }
        // console.log('Sushma')
    }
    onDecrement(){
        if(this.state.speed <= 200 && this.state.speed > 0){
            this.setState((prevState)=>({speed:prevState.speed-10}))
        }
        // console.log('Soujanya')
    }
  render() {
    return (
      <div>
        <h1 className="heading">Speed is {this.state.speed}mph</h1>
        <p className="description">min limit is 0mph.Max Limit is 200mph</p>
        <button className="btn-class" onClick={this.onIncrement}>Accelerate</button>
        <button className="btn-class" onClick={this.onDecrement}>Apply Brake</button>
      </div>
    )
  }
}
