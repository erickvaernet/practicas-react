import React, {useState, useRef} from 'react';
import { ToDoList } from './components/ToDoList';


function App() {
  const [todos,setTodos]= useState([
    {id:1, task: "first task", completed:false}
  ])

  const todoTaskRef= useRef();

  const handleTodoAdd = ()=> 
  {
    const task = todoTaskRef.current.value;
    if(task==="")return;
    setTodos((prevTodos)=>{
      return [...prevTodos, {id:prevTodos.length+1, task, completed:false}]
    });
    
    todoTaskRef.current.value=null;
  }

  return (  
    <React.Fragment>
      <ToDoList todos={todos} />
      <input ref={todoTaskRef} type="text" placeholder='Add a new task'/>
      <button onClick={handleTodoAdd}>✅</button>
      <button>🗑</button>
    </React.Fragment>
  );
}

export default App;
