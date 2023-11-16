import { Navigate, Outlet } from "react-router";
import PropTypes from 'prop-types';

const PublicRoute = ({
  user,
  redirectPath = "/places"
}) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

PublicRoute.propTypes = {
  user: PropTypes.object,
  redirectPath: PropTypes.string
};

export default PublicRoute;
