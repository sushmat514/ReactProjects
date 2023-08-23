import React, { Component } from 'react'
import './LettersCalculatorApp.css'
export default class LettersCalculatorApp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        inValue:'',
        letterCount: 0
      }
      this.onChangeHandler=this.onChangeHandler.bind(this)
    }
    onChangeHandler(event){
        // const {inValue} = this.state;
        this.setState(preValue=>({
            inValue: event.target.value,
            letterCount: preValue.letterCount+1
        }))
    }
  render() {
    return (
      <div className='main-container'>
        <div className='counter-div'>
            <>
                <h1 className='main-heading'>Calculate the letters you enter</h1>
                <label htmlFor='inputBox'>Enter the phrase</label><br/>
                <input id="inputBox" type="text" placeholder='Enter the phrase' value={this.state.inValue} onChange={this.onChangeHandler}/>
                <h3 className="counter-element">No. of letters: {this.state.letterCount}</h3>
            </>
            
        </div>
        <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="letters counter"/>
      </div>
    )
  }
}
