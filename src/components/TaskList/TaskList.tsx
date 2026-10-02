import React from 'react';
import type { Task } from '../../types/task';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.taskItem}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={task.status === 'completed'}
            onChange={() => onToggleTask(task.id)}
            aria-label={`Mark ${task.title} as ${task.status === 'completed' ? 'incomplete' : 'complete'}`}
          />
          <span className={`${styles.taskTitle} ${task.status === 'completed' ? styles.completed : ''}`}>
            {task.title}
          </span>
          <span className={`${styles.priorityBadge} ${styles[`priority${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}`]}`}>
            {task.priority}
          </span>
        </li>
      ))}
    </ul>
  );
};
