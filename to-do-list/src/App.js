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
      return [...prevTodos, {id:prevTodos[(prevTodos.length-1)].id+1, task, completed:false}]
    });
    
    todoTaskRef.current.value=null;
  }

  const toggleTodo = (id)=> {
    const newTodos=[...todos];
    const todo= newTodos.find((e)=> e.id===id);
    todo.completed= !todo.completed;
    setTodos(newTodos);
  }

  const dropItem = ()=> 
  {
    if (isNaN(todoTaskRef.current.value)) return;
    const idItem= todoTaskRef.current.value;
    let newTodos=[...todos];
    const indexOfItem=idItem-1
    newTodos.splice(indexOfItem,1);
    setTodos(newTodos);
  }

  return (  
    <React.Fragment>
      <ToDoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoTaskRef} type="text" placeholder='Add a new task or drop by id'/>
      <button onClick={handleTodoAdd}>✅</button>
      <button onClick={dropItem}>🗑</button>
    </React.Fragment>
  );
}

export default App;
