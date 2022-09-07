import { useEffect, useState } from 'react';
import { ITask } from './models/Task';
import styles from './styles/App.module.css';
import logo from './assets/logo.png';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { TextStatus } from './components/TextStatus';
import { TasksList } from './components/TasksList';
import { NoTasks } from './components/NoTasks';

function App() {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [doneTasks, setDoneTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const doneTasks = tasks.filter((task) => task.status === 'done');
    setDoneTasks(doneTasks);
  }, [tasks]);

  const handleAddTask = () => {
    const task = {
      id: new Date().getTime(),
      title: taskTitle,
      status: 'pending',
    };

    if (taskTitle.trim().length > 0) {
      setTasks([...tasks, task]);
      setTaskTitle('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
        </div>

        <div className={styles.form}>
          <Input value={taskTitle} onChange={setTaskTitle} />
          <Button onClick={() => handleAddTask()} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.tasksStatus}>
          <TextStatus label='Criadas' value={tasks.length} />
          <TextStatus label='Concluídas' value={doneTasks.length} />
        </div>
      </div>

      {!tasks.length && <NoTasks />}

      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
