import React, { Component } from 'react'
import './SimpleTodosApp.css'
import TodoList from './TodoList'
const initialTodosList = [
  {
    id: 1,
    heading: 'Book the ticket for today evening'
  },
  {
    id: 2,
    heading: 'Rent the movie for tomorrow movie night'
  },
  {
    id: 3,
    heading: 'Confirm the slot for the yoga session tomorrow morning'
  },
  {
    id: 4,
    heading: 'Drop the parcel at Bloomingdale'
  },
  {
    id: 5,
    heading: 'Order fruits on Big Basket'
  },
  {
    id: 6,
    heading: 'Fix the production issue'
  },
  {
    id: 7,
    heading:'Confirm my slot for Saturday Night'
  },
  {
    id: 8,
    heading: 'Get essentials for Sunday car wash'
  },
]
export default class SimpleTodosApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todoList: initialTodosList
    }
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
  }
  
  onDeleteHandler(id){
    // console.log("On Delete Handler Called");
    const {todoList}=this.state
    const filteredTodoList = todoList.filter((eachItem)=>{
      return eachItem.id !== id
    })
    this.setState({todoList: filteredTodoList})
  }
  render() {
    const {todoList} = this.state
    return (
      <div className="main-background">
        <div className="todo-container">
            <h1>Simple Todos</h1>
            {todoList.map(eachItem=> 
                <TodoList eachItem={eachItem}  key={eachItem.id} onDeleteHandler = {this.onDeleteHandler}/>
              )}
            {/* {initialTodosList.map(eachItem=>
              <TodoList eachItem ={eachItem} key={eachItem.id} onDeleteHandler={this.onDeleteHandler}/>
              // <div>{eachItem.id} {eachItem.heading}</div>
            )} */}
            {/* <TodoList/> */}
        </div>
      </div>
    )
  }
}
