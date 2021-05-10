import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  
    return (
        <div className="container my-3 " >
            <h3 className="text-center">  <u>Todos List </u> </h3>
            {props.todos.length===0? <strong> There ae no more todos</strong> :

            props.todos.map((todo) => {

                return (
                    <TodoItem className=" text-center my-auto" todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    
                )
            })}
             

        </div>
    )
}
