import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const token = window.sessionStorage.getItem('access_token');

  if (!token) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
