import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { Navigate,useLocation } from 'react-router-dom';

function ProtectLogin({ children }) {

    const  AuthCtx = useContext(AuthContext);
    const location = useLocation(); 

    const redirectUrl = location.state !== null ? location.state.path : "/profile";

    return AuthCtx.isLoggedIn === true
    ? <Navigate to = {redirectUrl}  replace state={{ path: location.pathname }} />
    : children ;
}

export default ProtectLogin;