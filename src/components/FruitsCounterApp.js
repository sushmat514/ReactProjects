import React, { Component } from 'react'
import './FruitsCounterApp.css';
export default class FruitsCounterApp extends Component {
    constructor(props){
        super(props)
        this.state={
            mangoCount:0,
            banana:0
        }
        this.onEatBanana = this.onEatBanana.bind(this)
        // this.onEatMango = this.onEatMango.bind(this)
    }
    onEatMango(){
        console.log("mango consumed");
        this.setState((prevState)=>({
          mangoCount: prevState.mangoCount + 1
        }),console.log(this.state.mangoCount))
    }
    onEatBanana(){
        console.log("Banana eaten");
        this.setState((prevState)=>({
          banana: prevState.banana + 1
        }))
    }
  render() {
    return (
      <div className='main-container'>
        <h1>Bob ate {this.state.mangoCount} mangoes {this.state.banana} bananas</h1>
        <div className="fruits-container">
            <div className="card-container">
                <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mangos" className="img-class"/><br/>
                <button className="button" onClick={()=>(this.onEatMango())}>Eat Mango</button>
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
