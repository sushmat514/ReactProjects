import React from 'react'
import './Thumbnail.css'
export default function Thumbnail(props) {
    const {thumbnailItem,onActiveImgHandler,activeState} = props
    const{id,thumbnailUrl,thumbnailAltText} = thumbnailItem
    const onClickHandler=()=>{
        onActiveImgHandler(id)

    }
    const classTag  = activeState?" ":"thumbnail-img"
  return (
    <>
      <img className={`${classTag} general-tag`} src={thumbnailUrl} alt = {thumbnailAltText} onClick={onClickHandler}/>
    </>
  )
}
