import React, { useEffect } from 'react';
import styles from './TaskList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { fetchAsyncGet, selectTasks } from './TaskSlice';
import { fetchAsyncProf } from '../login/LoginSlice';

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTaskProf = () => {
      dispatch(fetchAsyncGet());
      dispatch(fetchAsyncProf());
    };
    fetchTaskProf();
  }, [dispatch]);

  return (
    <div>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task}></TaskItem>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
