import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Logo from '../../assets/images/Logo.svg';

import styles from './logotype.module.scss';

const Logotype = () => {
  return (
    <Box className={styles.logoWrapper}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <Typography className={styles.logoTitle}>Need for drive</Typography>
    </Box>
  );
};

export default Logotype;
