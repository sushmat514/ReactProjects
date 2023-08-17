import React, { Component } from 'react'
import './EvenOddApp.css'
export default class EvenOddApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value:0,
       status:'even'
    }
    this.onIncrement = this.onIncrement.bind(this)
  }
  onIncrement(){
    let num = Math.floor(Math.random()*100)
    // this.setState({value: this.state.value + 1})
    // this.setState= ((prevState)=>({value: this.prevState.value + 1}))
    this.setState(function (prevState){
       return {value : prevState.value+num}
    },()=>{
      let res=""
      if(this.state.value%2 ===0){
        res="even"        
      }
      else{
        res="odd"
      }
      this.setState({status:res})
    })
  }
  /*onIncrement(){
    console.log("sushma")
    let num = Math.floor(Math.random()*100)
    // console.log(this.state.value +num);
    // console.log(num)
    this.setState=({value:this.state.value+num},console.log(this.state.value))
    // this.setState=((prevState)=>({
    //   value : prevState.value + num
    // }))
    // }),()=>{
    //   let res=""
    //   if(this.state.value%2 ===0){
    //     res="even"        
    //   }
    //   else{
    //     res="odd"
    //   }
    //   this.setState({status:res})
    // })
    
  }*/
  render() {
    return (
      <div className="background-container">
        <div>
        <h1>Count {this.state.value}</h1>
        <h3 className="evenodd-descript">Count is {this.state.status}</h3>
        <button onClick={this.onIncrement}>Increment</button>
        <p>* increase by random number between 0 to 100</p>
        </div>
        
      </div>
    )
  }
}
