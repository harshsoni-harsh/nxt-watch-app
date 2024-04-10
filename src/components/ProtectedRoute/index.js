import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

import Layout from '../Layout'

const ProtectedRoute = (props) => {
  const jwtToken = Cookies.get("jwt_token");
  if (!jwtToken) return <Redirect to="/login" />;
  return (
    <Layout>
      <Route {...props} />
    </Layout>
  );
};

export default ProtectedRoute;
