import styles from './NoTasks.module.css';
import clipboard from '../../assets/clipboard.png';

export function NoTasks() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt='No Tasks' />
      <div>
        <p className={styles.textBold}>
          Você ainda não tem tarefas cadastradas
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
