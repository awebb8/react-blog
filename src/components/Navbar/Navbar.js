import React from 'react';
import { Link } from "react-router-dom";
import './Navbar-style.css';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to="/landing" className="navbar-brand">Blog Name</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/posts" className="nav-link">Posts</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
              </ul>
            </div>
        </nav>
    )
}

export default Navbar;