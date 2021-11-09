import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // const [todos, setTodos] = useState([
  //   {
  //     sno: 1,
  //     title: "Go to the market",
  //     desc: "You need to go to the market to get this job done"
  //   },
  //   {
  //     sno: 2,
  //     title: "Go to the Mall",
  //     desc: "You need to go to the market to get this job done"
  //   },
  //   {
  //     sno: 3,
  //     title: "Go to the Ghaat",
  //     desc: "You need to go to the market to get this job done"
  //   },
  //   {
  //     sno: 4,
  //     title: "Go to the Delhi",
  //     desc: "You need to go to the market to get this job done"
  //   }
  // ]);

  const onDelete = (todo)=>{
    console.log('I am on delete of todo: ', todo.sno )
    setTodos(todos.filter((e)=>{
      return e!== todo;
    }))
  }

  const addTodo = (title, desc)=>{
    let n = 0;
    if(todos.length !== 0){
      n = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: n,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect( () =>{
    localStorage.setItem("todos", JSON.stringify(todos));  
  }, [todos])


  return (
    <>
    <Router>
      <Header title="This is my title"/>
      <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
                <Todos  todos={todos} onDelete={onDelete}/>
                <AddTodo addTodo={addTodo}/>
              </>
            )
          }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>          
      </Switch>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
