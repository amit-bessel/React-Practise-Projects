import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import  AuthContext from "../../../store/auth-context";

import styles from "./Header.module.css";

function Header() {

  let navigate = useNavigate();
  const loginRoute = () => navigate('login');

  const AuthCtx = useContext(AuthContext);
  //console.log(AuthCtx);

  const loginHandle = (e) => {
    e.preventDefault();
    AuthCtx.logout();
    navigate('/');
  }

  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink" id="mainNav">
          <div className="container">
            <Link className="navbar-brand" to="/">Start React</Link>
            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu<i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                {AuthCtx.isLoggedIn && <li className="nav-item mx-0 mx-lg-1">
                  <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="my-portfolio">My PortFolio</Link>
                </li>}
                <li className="nav-item mx-0 mx-lg-1">
                  <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="portfolio">Portfolio</Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="about">About</Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact"> Contact </a>
                </li>                
                {!AuthCtx.isLoggedIn && <li className="nav-item mx-0 mx-lg-1">
                  <button className={`${styles.login_btn} text-uppercase font-weight-bold bg-primary text-white rounded`}  type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={loginRoute}>Login</button>
                </li>}
              </ul> 

              {AuthCtx.isLoggedIn && <div className="dropdown">
                <img data-bs-toggle="dropdown" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="dropdown-toggle rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy"/>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="profile">Profile</Link></li>
                  <li><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="change-password">Change Password</Link></li>
                  <li><a className="dropdown-item" onClick={loginHandle} href="/">Logout</a></li>
                </ul>
              </div>} 

            </div>

            

          </div>
        </nav>
    </React.Fragment>
  )
}

export default Header