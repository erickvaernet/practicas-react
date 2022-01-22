import React from 'react';

export function ToDoItem({todo, toggleTodo}) {
  const {id, task, completed}=todo;
  return (
    <li>
     {id} - {task} - <input type="checkbox" onClick={()=>toggleTodo(id)}/> 
    </li>
  );
}
