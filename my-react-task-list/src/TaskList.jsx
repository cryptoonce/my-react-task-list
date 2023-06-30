import React from 'react';
import Task from './Task';

const TaskList = () => {
const tasks = [
    { id: 1, name: 'pasear el perro', completed: false },
    { id: 2, name: 'estudiar reac', completed: true },
    { id: 3, name: 'entregar la lista de tarea', completed: false }
];

return (
    <div className="task-list">
        <h2 className="list-title">Task List</h2>
        {tasks.map(task => (
        <Task key={task.id} task={task} />
    ))}
    </div>
);
};

export default TaskList;
