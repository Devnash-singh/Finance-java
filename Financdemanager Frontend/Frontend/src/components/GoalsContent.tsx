import React from 'react';
import { tasks } from './db/GoalsContianer'; // Adjust the import path if necessary

interface Task {
  id: number;
  title: string;
  description: string;
}

export default function GoalsContent() {
  return (
    <div style={{ fontSize: '1.4em', fontFamily:'monospace'}}>
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input type="checkbox" name={`${task.id}`} style={{ marginRight: '8px' }} />
              <span style={{ fontWeight: 'bold', marginRight: '4px' }}>{task.title}</span>
              <span>{task.description}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
