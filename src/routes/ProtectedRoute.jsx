import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  if (!allowedRoles.includes(JSON.parse(localStorage.getItem("user"))?.type)) {
    return <Navigate to="/" replace />;
  }
  if (JSON.parse(localStorage.getItem("user"))?.token) return children;
};

export default ProtectedRoute;
