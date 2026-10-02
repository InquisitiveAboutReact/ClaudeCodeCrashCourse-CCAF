import React from 'react';
import type { Task } from '../../types/task';
import styles from './RecentActivity.module.css';

interface RecentActivityProps {
  tasks: Task[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ tasks }) => {
  const recentTasks = [...tasks].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 5);

  if (recentTasks.length === 0) {
    return (
      <div className={styles.placeholder}>
        <div className={styles.placeholderContent}>
          <div className={styles.placeholderIcon}>⚡</div>
          <p>No recent activity to display. Start by adding some tasks!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Recent Activity</h2>
        <a href="#all" className={styles.viewAll}>View All</a>
      </div>
      <ul className={styles.list}>
        {recentTasks.map(task => (
          <li key={task.id} className={styles.item}>
            <div className={styles.taskInfo}>
              <span className={styles.title}>{task.title}</span>
              <span className={styles.date}>{task.createdAt.toLocaleDateString()}</span>
            </div>
            <span className={`${styles.badge} ${styles[task.status]}`}>
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
