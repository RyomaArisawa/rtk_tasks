import { Button } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './TaskInput.module.css';
import {
  editTask,
  fetchAsyncCreate,
  fetchAsyncUpdate,
  selectEditedTask,
} from './TaskSlice';

const TaskInput = () => {
  const dispatch = useDispatch();
  const editedTask = useSelector(selectEditedTask);

  const handleInputChange = (e) => {
    const value = e.target.value ? e.target.value : '';
    editedTask.id === 0
      ? dispatch(editTask({ id: 0, title: value }))
      : dispatch(editTask({ id: editedTask.id, title: value }));
  };

  const isDisabled = editedTask.title.length === 0;

  const createClicked = () => {
    dispatch(fetchAsyncCreate(editedTask));
    dispatch(editTask({ id: 0, title: '' }));
  };

  const updateClicked = () => {
    dispatch(fetchAsyncUpdate(editedTask));
    dispatch(editTask({ id: 0, title: '' }));
  };

  return (
    <div>
      <input
        type="text"
        className={styles.taskInput}
        value={editedTask.title}
        onChange={handleInputChange}
        placeholder="Please input task"
      ></input>
      <div className={styles.switch}>
        {editedTask.id === 0 ? (
          <Button
            variant="contained"
            disabled={isDisabled}
            onClick={createClicked}
            color="primary"
          >
            Create
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={isDisabled}
            onClick={updateClicked}
            color="primary"
          >
            Update
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaskInput;
