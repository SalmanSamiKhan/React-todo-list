import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight : "70vh",
        margin:"40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className='my-3'>Todo List</h3>
            {props.todos.length==0? <h2>No todos to display</h2>:
            props.todos.map((todo)=>{
                return(
                 <TodoItem todo={todo} onDelete={props.onDelete}/>)
            })}
            
        </div>
    )
}
