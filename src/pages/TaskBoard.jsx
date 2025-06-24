import React, { useState } from 'react';

const initialTasks = [
  { id: 1, title: 'Login Page', status: 'TODO' },
  { id: 2, title: 'Dashboard UI', status: 'TODO' },
  { id: 3, title: 'API Integration', status: 'IN PROGRESS' },
];

const statuses = ['TODO', 'IN PROGRESS', 'DONE'];

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (id, direction) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          const currentIndex = statuses.indexOf(task.status);
          const newIndex =
            direction === 'forward'
              ? Math.min(currentIndex + 1, statuses.length - 1)
              : Math.max(currentIndex - 1, 0);
          return { ...task, status: statuses[newIndex] };
        }
        return task;
      })
    );
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {statuses.map((status) => (
        <div key={status} style={{ flex: 1 }}>
          <h2>{status}</h2>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <div key={task.id} style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ccc' }}>
                <p>{task.title}</p>
                <div>
                  <button onClick={() => moveTask(task.id, 'back')} disabled={task.status === 'TODO'}>
                    ◀ Back
                  </button>
                  <button onClick={() => moveTask(task.id, 'forward')} disabled={task.status === 'DONE'} style={{ marginLeft: '10px' }}>
                    Next ▶
                  </button>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
