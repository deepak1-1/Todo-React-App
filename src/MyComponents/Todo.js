import React from 'react'

export const Todo = ({todo, onDelete}) => {
    return (
        <div className="border border-secondary rounded my-2 p-2 ">
            <h4 className="mb-0 pb-0 font-weight-bolder">{todo.title}</h4>
            <p>{todo.desc}</p>
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
            </div>           
        </div>
    )
}
