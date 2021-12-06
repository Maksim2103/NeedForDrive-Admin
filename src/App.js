import { Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';

import Box from '@mui/material/Box';

import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';
import MainPage from './Pages/MainPage/MainPage';
import NotFoundPage from './Pages/NotFoundPaga/NotFoundPage';

import styles from './app.module.scss';

function App() {
  return (
    <Box className={styles.app}>
      <Routes>
        <Route path="/" element={<AuthorizationPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
}

export default App;
