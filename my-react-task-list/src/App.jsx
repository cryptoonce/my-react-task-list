import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import Task from './Task';
import "./App.css";


const App = () => {
  return (
    <div>
      <Header />
      <TaskList />
    </div>
  );
};

export default App;
