import React, {useState, useRef, useEffect} from 'react';
import { ToDoList } from './components/ToDoList';

const KEY= "todoApp.todos"

function App() {
  const [todos,setTodos]= useState([
    {id:1, task: "first task", completed:false}
  ])

  const todoTaskRef= useRef();

  useEffect(()=>{
    const storedTodos= JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) setTodos(storedTodos);
    document.addEventListener("keydown",(event)=>handleTodoAdd2(event))
  },[]);

  useEffect(()=>{
    localStorage.setItem(KEY,JSON.stringify(todos))
  },[todos]);

  const handleTodoAdd = ()=> 
  {
    const task = todoTaskRef.current.value;
    if(task==="")return;
    
    setTodos((prevTodos)=>{
      return [...prevTodos, 
        {
          id: prevTodos.length==0? 1:prevTodos[(prevTodos.length-1)].id+1,
          task,
          completed:false
        }]
    });
    
    todoTaskRef.current.value=null;
  }

  const handleTodoAdd2=(event)=>{
    if (event.keyCode==13) handleTodoAdd();
  }

  const toggleTodo = (id)=> {
    const newTodos=[...todos];
    const todo= newTodos.find((e)=> e.id===id);
    todo.completed= !todo.completed;
    setTodos(newTodos);
  }

  const handleClearAll = ()=> 
  {
    const newTodos= todos.filter((e)=> !e.completed);
    setTodos(newTodos); 
  }

  return (  
    <React.Fragment>
      <ToDoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoTaskRef} type="text" placeholder='Add a new task'/>
      <button onClick={handleTodoAdd} onKeyPress={handleTodoAdd2}>✅</button>
      <button onClick={handleClearAll}>🗑</button>
      <div>
        <p> You have {todos.filter((e)=> e.completed===false).length} tasks left to complete </p>
      </div>
    </React.Fragment>
  );
}

export default App;
