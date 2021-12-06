import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import styles from './mainPage.module.scss';
import { fetchAsyncLogout } from '../../Redux/features/thunks';
import { selectAccessToken } from '../../Redux/features/authReducer/authtorizationSlice';

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
    <div>
      <h1>Main Page</h1>

      <NavLink
        className={styles.buttonLogout}
        onClick={handleClickLogout}
        to="/"
      >
        Log out
      </NavLink>
    </div>
  );
};

export default MainPage;
