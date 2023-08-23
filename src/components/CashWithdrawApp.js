import React, { Component } from 'react'
import './CashWithdrawApp.css'
import DenominationCurrency from './DenominationCurrency'
const amount =[50,100,200,500]
export default class CashWithdrawApp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         amount: 1150
      }
      this.onAmountDenominationHandler=this.onAmountDenominationHandler.bind(this)
    }
    onAmountDenominationHandler(subAmount){
        // console.log("denomination handler called",amount)
        this.setState({amount: this.state.amount - subAmount})
    }
  render() {
    return (
      <div className='main-background'>
        <div className='profile-section'>
            <h1 className='profile'>S</h1>
            <h1 className='profile-name'>Sarah Willams</h1>
        </div>
        <div className='balance-container'>
            <p className='balance-decript'>Your Balance</p>
            <div className="balance-money-container">
                <h1 className='amount'>{this.state.amount}</h1>
                <p className='descript'>In Rupees</p>
            </div>
        </div>
        <h1 className='amount'>Withdraw</h1>
        <p className='descript'>CHOOSE SUM IN RUPEES</p>
        {amount.map((eachItem,index)=><DenominationCurrency key={index} amount = {eachItem} onAmountDenomination = {this.onAmountDenominationHandler}/>)}
      </div>
    )
  }
}
