import React from 'react'
import './LocationComponent.css'
export default function LocationComponent(props) {
    const {item} = props
    const {name,imgUrl}=item
    return (
    <div className='location-container'>
      <img src={imgUrl} alt={name}/>
      <p>{name}</p>
    </div>
  )
}
