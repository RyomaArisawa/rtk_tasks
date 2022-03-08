import React from 'react';
import styles from './App.module.css';
import { FaSignInAlt } from 'react-icons/fa';
import TaskList from './features/task/TaskList';
import TaskDetails from './features/task/TaskDetails';
import TaskInput from './features/task/TaskInput';
import Header from './features/login/Header';

function App() {
  const Logout = () => {
    localStorage.removeItem('localJWT');
    window.location.href = '/';
  };

  return (
    <div className={styles.containerTasks}>
      <div className={styles.appTasks}>
        <button onClick={Logout} className={styles.signBtn}>
          <FaSignInAlt />
        </button>
        <Header></Header>
        <TaskInput></TaskInput>
        <TaskList></TaskList>
      </div>
      <div className={styles.appDetails}>
        <TaskDetails></TaskDetails>
      </div>
    </div>
  );
}

export default App;
