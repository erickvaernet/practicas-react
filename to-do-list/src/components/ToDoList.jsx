import React from 'react';
import { ToDoItem } from './ToDoItem';

export function ToDoList({todos,toggleTodo}) {
  return (  
      <ul>
        {todos.map((todoit)=>
            <ToDoItem key={todoit.id} todo={todoit} toggleTodo={toggleTodo}/>
        )}
      </ul>
  );
}
