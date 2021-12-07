import Box from '@mui/material/Box';

import styles from './aside.module.scss';

import Logotype from '../Logotype/Logotype';
import Paper from '@mui/material/Paper';
import NavBar from '../Logotype/NavBar/NavBar';

const Aside = () => {
  return (
    <Paper className={styles.asideWrapper}>
      <Box className={styles.logoWrapper}>
        <Logotype />
      </Box>
      <Box className={styles.navBar}>
        <NavBar />
      </Box>
    </Paper>
  );
};

export default Aside;
