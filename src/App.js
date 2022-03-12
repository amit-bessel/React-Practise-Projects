import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles.css";
import About from "./components/About/About";
import Employee from "./components/Employee/Employee";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";

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
      <BrowserRouter>
       
        <Header />

          <Routes>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/portfolio' element={<Employee />}></Route>  
            <Route path='/' element={<Home />}></Route>        
          </Routes>

        <Footer />
                
      </BrowserRouter>
    </div>
  );
}

export default App;
