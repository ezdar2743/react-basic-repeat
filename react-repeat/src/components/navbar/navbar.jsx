import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
          className="nav-link"
          aria-current="page"
          to="/"
          activeClassName="active"
          >Home</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink 
          className="nav-link"
          to="Animation"
          activeClassName="active"
          >Animation</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          className="nav-link"
          to="Users"
          activeClassName="active"
          >Users</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default navbar;