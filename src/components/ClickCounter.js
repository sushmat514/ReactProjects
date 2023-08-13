// import React from 'react'

import React, { Component } from 'react'

export default class ClickCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
        this.countUpdate = this.countUpdate.bind(this)
      }
    countUpdate(){
        this.setState((preValue)=>({count: preValue.count+1}))
        // console.log(this.state.count)
        // console.log("Sushma soujanya");
    }
  render() {
    return (
      <div>
        <h1>The Button has been clicked {this.state.count} times</h1>
        <p>Click the button to increase the count!</p>
        <button onClick = {this.countUpdate}>Click Me!</button>
      </div>
    )
  }
}

// export default function ClickCounter(props) {
//     const {count, countHandler} = props
//     const countUpdate=()=>{
//         // console.log("Sushma Soujanya")
//         countHandler();
//     }
//   return (
//     <div>
//       <h1>The Button has been clicked {count} times</h1>
//       <p>Click the button to increase the count!</p>
//       <button onClick = {countUpdate}>Click Me!</button>
//     </div>
//   )
// }
