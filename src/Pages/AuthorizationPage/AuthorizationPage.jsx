import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

import styles from './authorizationPage.module.scss';

import Logo from '../../assets/images/Logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAsyncLogin,
  fetchAsyncRegister,
} from '../../Redux/features/thunks';
import { selectDataResponseRegister } from '../../Redux/features/authReducer/authtorizationSlice';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AuthorizationPage = () => {
  const dispatch = useDispatch();
  const registerData = useSelector(selectDataResponseRegister);

  const [email, setEmail] = useState('intern');
  const [password, setPassword] = useState('intern-S!');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClickRegister = () => {
    dispatch(
      fetchAsyncRegister({
        username: email,
        password: password,
      }),
    );
  };

  const handleClickLogin = () => {
    dispatch(fetchAsyncLogin(registerData));
  };

  return (
    <Box>
      <Box className={styles.logoWrapper}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <Typography className={styles.logoTitle}>Need for drive</Typography>
      </Box>

      <Paper className={styles.formWrapper}>
        <Typography className={styles.mainTitle}>Вход</Typography>

        <Box className={styles.inputWrapper}>
          <Typography className={styles.inputTitle}>Почта</Typography>
          <TextField
            className={styles.inputInput}
            type="email"
            size="small"
            fullWidth
            id="outlined-email"
            label="Введите e-mail"
            value={email}
            onChange={handleChangeEmail}
          />
        </Box>

        <Box className={styles.inputWrapper}>
          <Typography className={styles.inputTitle}>Пароль</Typography>
          <TextField
            className={styles.inputInput}
            type="password"
            size="small"
            fullWidth
            id="outlined-password"
            label="Введите пароль"
            value={password}
            onChange={handleChangePassword}
          />
        </Box>

        <Box className={styles.buttonsWrapper}>
          <Button
            className={styles.buttonAuth}
            variant="text"
            onClick={handleClickRegister}
          >
            Запросить доступ
          </Button>
          <NavLink
            className={cx(
              'buttonLogin',
              !Boolean(registerData) ? 'disabledLink' : null,
            )}
            to="/main"
            onClick={handleClickLogin}
          >
            Войти
          </NavLink>
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthorizationPage;
