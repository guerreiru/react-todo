import { Trash } from 'phosphor-react';
import { ITask } from '../../models/Task';
import styles from './TasksList.module.css';

interface Props {
  tasks: Array<ITask>;
  setTasks: (tasks: Array<ITask>) => void;
}

export function TasksList({ tasks, setTasks }: Props) {
  const handleDoneTask = (id: number) => {
    const task = tasks.find((task) => task.id === id);

    if (task) {
      if (task.status === 'done') {
        task.status = 'pending';
      } else {
        task.status = 'done';
      }
    }

    setTasks([...tasks]);
  };

  const handleDeleteTask = (id: number) => {
    const task = tasks.find((task) => task.id === id);

    if (task) {
      tasks.splice(tasks.indexOf(task), 1);
    }

    setTasks([...tasks]);
  };

  return (
    <div className={styles.container}>
      {tasks.map((item) => (
        <div className={styles.cardContainer} key={item.id}>
          <input
            type='checkbox'
            checked={item.status === 'pending' ? false : true}
            onChange={() => handleDoneTask(item.id)}
            className={styles.checkboxBase}
          />
          <div style={{ width: '75%' }}>
            <p
              className={styles.cardText}
              style={{
                textDecorationLine:
                  item.status === 'pending' ? 'none' : 'line-through',
                color: item.status === 'pending' ? '#fff' : 'var(--gray-300)',
              }}
            >
              {item.title}
            </p>
          </div>
          <span onClick={() => handleDeleteTask(item.id)}>
            <Trash size={24} color='#808080' />
          </span>
        </div>
      ))}
    </div>
  );
}
