import React, { useState } from 'react';
import styles from './TaskForm.module.css';

interface TaskFormProps {
  onAddTask: (title: string) => void;
  onCancel: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask, onCancel }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Create New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="task-title">Task Title</label>
            <input
              id="task-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              autoFocus
            />
          </div>
          <div className={styles.actions}>
            <button type="button" className={styles.cancelBtn} onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn}>
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
