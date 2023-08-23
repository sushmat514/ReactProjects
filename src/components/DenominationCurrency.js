import React from 'react'
import './CashWithdrawApp.css'
export default function DenominationCurrency(props) {
    const {amount,onAmountDenomination} = props
    const onClickDenominationHandler = ()=>{
        onAmountDenomination(amount);
    }
  return (
    <>
      <button className='button-styling' onClick={onClickDenominationHandler}>{amount}</button>
    </>
  )
}
