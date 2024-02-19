import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm.tsx';
import TaskList from './components/TaskList.tsx';
import React from 'react';


function App() {

  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <TaskForm 
      updateState={setTaskList}
      state={taskList}
      />
      <TaskList
      taskList={taskList}
      updateState={setTaskList}
      />
    </>
  );
}

export default App;
