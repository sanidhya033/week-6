import { useEffect, useState } from 'react'
import axios from 'axios';

function App(){
    const [clicker,setclicker]=useState(1);
    return <div>
        
    <button onClick={function(){setclicker(1);}}>1</button>
    <button onClick={function(){setclicker(2);}}>2</button>
    <button onClick={function(){setclicker(3);}}>3</button>
    <button onClick={function(){setclicker(4);}}>4</button>
        <Todo id={clicker}></Todo>
    </div>
}


function Todo({id}){
    const [todo,setTodo] = useState({});

    useEffect( ()=>{
        axios.get("https://sum-server.100xdevs.com/todo?id="+id)
        .then(function(response){
         setTodo(response.data.todo);
        })
       },[id])// dependencies is id 

    return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
    </div>
}