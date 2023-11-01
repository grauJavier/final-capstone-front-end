import { Navigate, Outlet } from "react-router";
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  user,
  redirectPath = "/login"
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  redirectPath: PropTypes.string
};

export default ProtectedRoute;
