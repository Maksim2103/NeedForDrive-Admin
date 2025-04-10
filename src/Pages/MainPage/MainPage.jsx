import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import styles from './mainPage.module.scss';
import { fetchAsyncLogout } from '../../Redux/features/thunks';
import { selectStatusLogout } from '../../Redux/features/authReducer/authtorizationSlice';
import { Button } from '@mui/material';
import { useEffect } from 'react';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = window.sessionStorage.access_token;
  const bearerString = `Bearer ${token}`;

  const handleClickLogout = () => {
    dispatch(fetchAsyncLogout(bearerString));
  };

  const statusLogout = useSelector(selectStatusLogout);

  useEffect(() => {
    if (statusLogout === 'succeeded') navigate('/', { replace: true });
  }, [statusLogout]);

  return (
    <div>
      <h1>Main Page</h1>

      <Button
        className={styles.buttonLogout}
        variant="contained"
        onClick={handleClickLogout}
      >
        Log out
      </Button>
    </div>
  );
};

export default MainPage;
