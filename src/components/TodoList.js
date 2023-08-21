import React from 'react'
import './TodoList.css'
export default function TodoList(props) {
   const {eachItem,onDeleteHandler} = props;
   const {id,heading} = eachItem

   console.log(heading)
   function onDeleHandler(){
    onDeleteHandler(id);
   }
  //  console.log(todoItem)
    // const {todoItem} = props;
    // const {title} = todoItem
    // console.log(todoItem)
    // const{title} = todoItem;
    // console.log({title})
  return (
    <div className='todo-item'>
      <p>{heading}</p>
      <button onClick={onDeleHandler}>Delete</button>
      {/* <p className='todo-item'>{heading}</p> */}

    </div>
  )
}
