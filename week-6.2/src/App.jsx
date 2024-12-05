import { useEffect, useState } from 'react'
import axios from 'axios';
function App() {
const[todos,setTodos]=useState([]);
/* useEffect(()=>{
  fetch("https://sum-server.100xdevs.com/todos")
  .then(async function (res) {
    const json=res.json();
    setTodos(json.todos);
  })
},[]) */

useEffect(()=>{
 axios .get("https://sum-server.100xdevs.com/todos")
 .then(function(response){
  setTodos(response.data.todos);
 })
},[])
  return (<div>
    {todos.map(rtodo => <Todo key={todos.id} title={todos.title} description={todos.description}></Todo>)}
  </div>)
}

function Todo({title,description}){
 return (<div>
  <h1>{title}</h1>
  <h2>{description}</h2>

 </div> )
 
}

export default App
