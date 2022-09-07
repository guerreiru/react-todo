import { Badge } from '../Badge';
import styles from './TextStatus.module.css';

interface Props {
  value: number;
  label: string;
}

export const TextStatus = ({ label, value }: Props) => {
  return (
    <div className={styles.tasksStatusWrapper}>
      <p
        className={styles.tasksStatusText}
        style={{
          color: label === 'Criadas' ? 'var(--blue)' : 'var(--purple)',
        }}
      >
        {label}
      </p>
      <Badge value={value} />
    </div>
  );
};
