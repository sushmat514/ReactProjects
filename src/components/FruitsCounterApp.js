import React, { Component } from 'react'
import './FruitsCounterApp.css';
export default class FruitsCounterApp extends Component {
    constructor(props){
        super(props)
        this.state={
            mango:0,
            banana:0
        }
    }
    onEatMango(){
        console.log("mango consumed");
    }
    onEatBanana(){
        console.log("Banana eaten")
    }
  render() {
    return (
      <div className='main-container'>
        <h1>Bob ate 0 mangoes 0 bananas</h1>
        <div className="fruits-container">
            <div className="card-container">
                <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mangos" className="img-class"/><br/>
                <button className="button" onClick={this.onEatMango}>Eat Mango</button>
            </div>
            <div className='card-container'>
                <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png " alt="bananas" className="img-class"/><br/>
                <button className="button" onClick={this.onEatBanana}>Eat Banana</button>
            </div>
        </div>
        
      </div>
    )
  }
}
