import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  editUsername,
  editPassword,
  toggleMode,
  selectAuthen,
  selectIsLoginView,
  fetchAsyncLogin,
  fetchAsyncRegister,
} from './LoginSlice';
import styles from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const authen = useSelector(selectAuthen);
  const isLoginView = useSelector(selectIsLoginView);
  const btnDisabler = authen.username === '' || authen.password === '';

  const login = () => {
    if (isLoginView) {
      dispatch(fetchAsyncLogin(authen));
    } else {
      const result = dispatch(fetchAsyncRegister(authen));
      if (fetchAsyncRegister.fulfilled.match(result)) {
        dispatch(fetchAsyncLogin(authen));
      }
    }
  };
  return (
    <div className={styles.containerLogin}>
      <div className={styles.appLogin}>
        <h1>{isLoginView ? 'Login' : 'Resiger'}</h1>
        <span>Username</span>
        <input
          type="text"
          className={styles.input}
          name="username"
          placeholder=""
          onChange={(e) => dispatch(editUsername(e.target.value))}
          required
        ></input>
        <span>Password</span>
        <input
          type="text"
          className={styles.input}
          name="password"
          placeholder=""
          onChange={(e) => dispatch(editPassword(e.target.value))}
          required
        ></input>
        <div className={styles.switch}>
          <Button
            variant="contained"
            disabled={btnDisabler}
            color="primary"
            onClick={login}
          >
            {isLoginView ? 'Login' : 'Create'}
          </Button>
        </div>
        <span
          className={styles.switchText}
          onClick={() => dispatch(toggleMode())}
        >
          {isLoginView ? 'Create Accont ?' : 'Back to Login'}
        </span>
      </div>
    </div>
  );
};

export default Login;
