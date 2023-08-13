import React from 'react'
import './SpeedoMeterApp.css';
import SpeedoMeter from './SpeedoMeter'
export default function SpeedoMeterApp(){
  return (
    <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png " alt="sppedometer" className='image'/>
        <SpeedoMeter/>
    </div>
  )
}
