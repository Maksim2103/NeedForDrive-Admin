import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';

import styles from './mainPage.module.scss';
import { fetchAsyncLogout } from '../../Redux/features/thunks';
import { selectAccessToken } from '../../Redux/features/authReducer/authtorizationSlice';
import Aside from '../../Components/Aside/Aside';
import Content from '../../Components/Content/Content';

const MainPage = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(selectAccessToken);

  const handleClickLogout = () => {
    dispatch(
      fetchAsyncLogout({
        Authorization: `Bearer ${accessToken}`,
      }),
    );
  };
  return (
    <Box className={styles.mainWrapper}>
      <Box>
        <Aside />
      </Box>
      <Box>
        <Content />
      </Box>
      {/* <h1>Main Page</h1>

      <NavLink
        className={styles.buttonLogout}
        onClick={handleClickLogout}
        to="/"
      >
        Log out
      </NavLink> */}
    </Box>
  );
};

export default MainPage;
