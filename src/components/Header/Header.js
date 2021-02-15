import React from 'react';
import { Link } from "react-router-dom";
import './Header-style.css';

function Header() {
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome</h1>
                <p className="lead">This is a blog.</p>
            </div>
        </div>
    )
}

export default Header;