import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
        <nav
          className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink"
          id="mainNav"
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              Start React
            </Link>
            <button
              className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Header