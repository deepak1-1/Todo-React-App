import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        const notify = document.getElementById('notification');
        if(!title || !desc){
            notify.innerText = 'title or description can\'t be empty';
            notify.className = 'alert alert-danger text-center py-1 my-0';

            setTimeout( ()=>{
                notify.innerText = "";
                notify.className = '';
            }, 3000)
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    
    return (
        <div className="container my-4">
            <h2 className="display-4 font-weight-bold text-secondary text-center">Add to Do List</h2>
            <div id="notification"></div>
            <form className="border border-secondary p-2 py-4 rounded" onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label mb-0 pb-0">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label mb-0 pb-0">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-primary">Add to list</button>
            </form>
        </div>
    )
}
