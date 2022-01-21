import React from 'react';

export function ToDoItem({todo}) {
  const {id, task, completed}=todo;
  return (
    <li>{id} - {task} - {completed? "completed":"not completed"}</li>
  );
}
