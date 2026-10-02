import React from 'react';
import styles from './NotificationBadge.module.css';

interface NotificationBadgeProps {
  count: number;
  maxCount?: number;
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({ 
  count, 
  maxCount = 99 
}) => {
  if (count <= 0) return null;

  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  return (
    <span className={styles.badge} aria-label={`${displayCount} notifications`}>
      {displayCount}
    </span>
  );
};
