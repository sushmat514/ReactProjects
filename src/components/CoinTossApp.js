import React, { Component } from 'react'
import './CoinTossApp.css'
export default class CoinTossApp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        heads: 0,
        tails: 0,
        imgUrl :'"https://assets.ccbp.in/frontend/react-js/heads-img.png"'
      }
    }
    onClickHandler=()=>{
        const tossResult = Math.floor(Math.random()*2)
        console.log(tossResult)
        if(tossResult === 0){
            this.setState((prevValue)=>({heads : prevValue.heads+1,
            imgUrl:"https://assets.ccbp.in/frontend/react-js/heads-img.png"
            }))
            console.log("heads")
        }
        else{
            this.setState((prevValue)=>({
                tails : prevValue.tails + 1,
                imgUrl : "https://assets.ccbp.in/frontend/react-js/tails-img.png"
            }))
        }
    }
  render() {
    const {heads,tails,imgUrl} = this.state
    return (
      <div className='main-background'>
            <div className='card-container'>
                <h1>Coin Toss Game</h1>
                <p>Heads (or) tails</p>
                <img src={imgUrl} alt="heads"/><br/>
                <button onClick={this.onClickHandler}>
                    Toss Coin
                </button>
                <div className='count-container'>
                    <p className='descript'>Total: {heads + tails}</p>
                    <p className='descript'>Heads: {heads}</p>
                    <p className='descript'>Tails: {tails}</p>
                </div>
            </div>
      </div>
    )
  }
}
