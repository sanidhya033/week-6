import { useState } from 'react';
import React, {Fragment} from "react";

let counter =3;
function App() {
  const [todos, settodos] = useState([{
    id:1,
    title:"go to gym",
    description:"everyday"
  },
  { 
    id:2,
    title:"eat food",
    description:"everyday"
  },
  {
    id:3,
    title:"sleep",
    description:"everyday"
    }
  ])
  function addtodo(){
    settodos([...todos,{
      id:counter++,
    title:Math.random(),
    description:Math.random()
    }])
  }
 return (<div>
  <button onClick={addtodo}>Add a todo</button>
    {todos.map(todo =><Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
 </div>)

}

function Todo({title,description}){
  return (<div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>)
}

export default App
