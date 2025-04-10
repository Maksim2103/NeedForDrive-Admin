import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import styles from './authorizationPage.module.scss';

import Logo from '../../assets/images/Logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncLogin } from '../../Redux/features/thunks';

import classNames from 'classnames/bind';
import {
  selectIsErrorLogin,
  selectStatusLogin,
} from '../../Redux/features/authReducer/authtorizationSlice';

const cx = classNames.bind(styles);

const AuthorizationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoadingError = useSelector(selectIsErrorLogin);

  const fromPage = location.state?.from?.pathname || '/admin/main';

  const dispatch = useDispatch();

  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClickLogin = () => {
    dispatch(
      fetchAsyncLogin({
        username: login,
        password: password,
      }),
    );
  };

  const statusLogin = useSelector(selectStatusLogin);

  useEffect(() => {
    if (statusLogin === 'succeeded') navigate(fromPage);
  }, [statusLogin]);

  return (
    <Box>
      <Box className={styles.logoWrapper}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <Typography className={styles.logoTitle}>Need for drive</Typography>
      </Box>

      <Paper className={styles.formWrapper}>
        <Typography className={styles.mainTitle}>Вход</Typography>

        <Box className={styles.inputWrapper}>
          <Typography className={styles.inputTitle}>Логин</Typography>
          <TextField
            className={styles.inputInput}
            type="text"
            size="small"
            fullWidth
            id="outlined-login"
            label="Введите логин"
            error={isLoadingError}
            required
            value={login}
            onChange={handleChangeLogin}
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
            error={isLoadingError}
            helperText={isLoadingError && 'Неверный логин или пароль'}
            required
            value={password}
            onChange={handleChangePassword}
          />
        </Box>

        <Box className={styles.buttonsWrapper}>
          <Button className={styles.buttonAuth} variant="text" disabled>
            Запросить доступ
          </Button>
          <Button
            className={styles.buttonLogin}
            variant="contained"
            onClick={handleClickLogin}
          >
            Войти
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthorizationPage;
