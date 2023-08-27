import React, { Component } from 'react'
import './CapitalApp.css'
const countryAndCapitalsList = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland',
    },
  ]
export default class CapitalApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       capitalId: countryAndCapitalsList[0].id
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler(event){
    // console.log(event.target.value);
    this.setState({capitalId: event.target.value},console.log(this.state.capitalId));
  }
  render() {
    const {capitalId} = this.state
    // const capital = countryAndCapitalsList[capitalId].capital
    const capital = countryAndCapitalsList.filter(item=>(
      item.id === capitalId
    ))
    // console.log(capital)
    return (
      <div className='main-container'>
        <div className='capital-container'>
            <h1>Countries And Capitals</h1>
            <p>
            <form onChange={this.onChangeHandler}>
              <select name="countryCapital">
                {countryAndCapitalsList.map(eachItem=>(
                    <option value={eachItem.id} key = {eachItem.id}>{eachItem.capitalDisplayText}</option>
                ))}

              </select>
            </form> 
            is capital of which country?
            </p>
            <h1>{capital[0].country}</h1>
        </div>
      </div>
    )
  }
}
