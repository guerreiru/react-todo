import styles from './Badge.module.css';

interface Props {
  value: number;
}

export const Badge = ({ value }: Props) => {
  return (
    <div className={styles.badge}>
      <p className={styles.badgeText}>{value}</p>
    </div>
  );
};
