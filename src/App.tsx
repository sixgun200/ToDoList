import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import DisplayList from './components/DisplayList';

// display an input box to create a task
// create a task
// maintain the task list created
// display each task with a checkbox to represent whether is's completed
// mark a task as completed when the checkbox is clicked
// 

export interface TodoItem {
  taskItem: string;
  taskDone: boolean;
}

function App() {
  const [todos, setToDos] = React.useState<TodoItem[]>([{taskItem: "Wash the car", taskDone: false}, {taskItem: "Sweep the garage", taskDone: false}]);

  return (
    <div className="container justify-content-center">
      <InputForm tasks={todos} setTasks={setToDos} />
      <DisplayList tasks={todos} setTasks={setToDos} />
    </div>
  );
}

export default App;
