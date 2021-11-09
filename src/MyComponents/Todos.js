import React from 'react'
import {Todo} from "./Todo"

export const Todos = ( {todos, onDelete} ) => {
    return (
        <div>
            <div className="container">
                <h2 className="display-4 text-primary font-weight-bold text-center mt-1 mb-4">Todos List</h2>
                {todos.length===0? <p className="text-center">No todos to display</p>:
                    todos.map((todo)=>{
                        return <Todo todo={todo} key={todo.sno} onDelete={onDelete}/>
                    })
                }
                
            </div>
        </div>
    )
}
