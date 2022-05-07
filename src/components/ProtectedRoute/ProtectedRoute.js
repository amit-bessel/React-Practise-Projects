import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {

    const  AuthCtx = useContext(AuthContext);
    const location = useLocation();   

    return AuthCtx.isLoggedIn === true
      ? children
      : <Navigate to="/login" replace state={{ path: location.pathname }} />;
}

export default ProtectedRoute;