import React, { Component } from 'react'

export default class WelcomeApp extends Component {
  constructor (props){
    super(props)
    this.state={
        status: "Subscribed"
    }
    this.onSubscribeClick = this.onSubscribeClick.bind(this)
  }
  
    
  onSubscribeClick()  {
    this.setState =(prevState=>({
    //  if(this.state.status === 'Subscribe'){
    //   status : 'Subscribed'
    //  }
    //  else{
    //   status : 'Subscribe'
    //  }
      status : prevState.status === 'Subscribed' ? "Subscribe":'Subscribed'
    }))
    // this.setState({
    //   status: "Subscribed"
    // })
    console.log(this.state.status)
  }
  render(){
   return (
      <div>
        <h1>Welcome</h1>
        <h3>Thank you!Happy Learning</h3>
        <button onClick={this.onSubscribeClick}>{this.state.status}</button>
      </div>
    )
  }
}