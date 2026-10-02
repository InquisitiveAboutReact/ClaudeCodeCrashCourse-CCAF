import React from 'react';
import { StatCard } from '../StatCard/StatCard';
import styles from './DashboardStats.module.css';

interface DashboardStatsProps {
  totalTasks: number;
  completedTasks: number;
  productivityRate: number;
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({
  totalTasks,
  completedTasks,
  productivityRate
}) => {
  return (
    <div className={styles.container} role="region" aria-label="Dashboard Statistics">
      <StatCard
        label="Total Tasks"
        value={totalTasks}
        icon={<span>📋</span>}
      />
      <StatCard
        label="Completed Tasks"
        value={completedTasks}
        icon={<span>✅</span>}
      />
      <div className={styles.rateCard}>
        <StatCard
          label="Productivity Rate"
          value={`${productivityRate}%`}
          icon={<span>📈</span>}
        />
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${productivityRate}%` }}
          />
        </div>
      </div>
    </div>
  );
};
