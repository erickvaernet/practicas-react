import React from 'react';
import { ToDoItem } from './ToDoItem';

export function ToDoList({todos}) {
  return (  
      <ul>
        {todos.map((todoit)=>
            <ToDoItem todo={todoit}/>
        )}
      </ul>
  );
}
