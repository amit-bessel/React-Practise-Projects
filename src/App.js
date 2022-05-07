import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy } from "react";
import "./App.css";
import "./styles.css";
import { About } from "./components/About";
import {Home} from "./components/Home";
import {Footer} from "./components/Layout/Footer";
import {Header} from "./components/Layout/Header";
import {Login} from "./components/Login";
// import {Profile} from "./components/Profile";
import {ChangePassword} from "./components/ChangePassword";


import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import {ProtectLogin} from "./components/ProtectedRoute";
import {PortFolio, MyPortFolioList} from "./components/PortFolio";

import {AuthContextProvider} from './store/auth-context';

//const ChangePassword = lazy(() => import("./components/ChangePassword"));

function App() {
  window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    /* var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

    }; */

    // Shrink the navbar 
    // navbarShrink();
  });

  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
        
          <Header />

            <Routes>
              <Route path='/about' element={<About />}></Route>
              <Route path='/portfolio' element={<PortFolio />}></Route>  
              <Route exact path='/' element={<Home />}></Route>   
              <Route path='/login' element={<ProtectLogin><Login /></ProtectLogin>}></Route>              
              {/* <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>    */}           
              <Route path='/change-password' element={<ProtectedRoute><ChangePassword /></ProtectedRoute>}></Route>   
              <Route path='/my-portfolio' element={<ProtectedRoute><MyPortFolioList /></ProtectedRoute>}></Route>   
              <Route path="*" element={<p>There's nothing here: 404!</p>} />  
            </Routes>

          <Footer />
                  
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
