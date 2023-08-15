import React, { Component } from 'react'
import "./LightDarkMode.css"
export default class LightDarkMode extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         darkMode: true
      }
    }
onChangeMode(){
    console.log("MODE change Function")
    this.setState({
        darkMode : this.state.darkMode ? false:true
    })
}
  render() {
    const {darkMode} = this.state
    return (
      <div className="component-div" style={{ backgroundColor: darkMode?"black":"white"}}>
        <h1 style={{color:darkMode?"white":"black"}}>Click to Change Mode</h1>
        <button onClick={()=>(this.onChangeMode())}>{darkMode? "Light":"Dark"} Mode</button>
      </div>
    )
  }
}
