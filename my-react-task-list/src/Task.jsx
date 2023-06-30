import React from 'react';

const Task = ({ task }) => {
  const { id, name, completed } = task;

  const handleEdit = () => {
    // Función para editar la tarea
  };

  const handleDelete = () => {
    // Función para eliminar la tarea
  };

  return (
    <div className="task">
      <span className={completed ? 'completed' : ''}>{name}</span>
      <div className="task-actions">
        <button onClick={handleEdit}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default Task;
