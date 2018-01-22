import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom';
  import styles from './components.css'



class NavbarInstance extends React.Component {
   
    render() {
    return (
         <div className = "nav-container container-dark">
            <ul className = "nav">
                <li className="brand">Corporate Performance Analyzer</li>
                <li><NavLink activeClassName="active-link"  to="/home">Home</NavLink></li>
                <li><NavLink activeClassName="active-link" to="/statements">Statements</NavLink></li>
                <div class="dropdown">
                    <a href="#" class="dropbtn">Ratio</a>
                    <div class="dropdown-content">
                        <NavLink activeClassName="active-link" to="/ratio-construction">Ratio Construction</NavLink>
                        <NavLink activeClassName="active-link" to="/view-ratios">View Ratios</NavLink>
                    </div>
                </div> 
                <div class="dropdown">
                    <a href="#" class="dropbtn">Knowledge</a>
                    <div class="dropdown-content">
                    <li><NavLink activeClassName="active-link" to="/object">Object</NavLink></li>
                    <li><NavLink activeClassName="active-link" to="/predicate">Predicate</NavLink></li>
                    <li><NavLink activeClassName="active-link" to="/view-object">View Objects</NavLink></li>
                    </div>
                </div> 
                <div class="dropdown">
                    <a href="#" class="dropbtn">Text</a>
                    <div class="dropdown-content">
                    <li><NavLink activeClassName="active-link" to="/add-source">Add Source</NavLink></li>
                <li><NavLink activeClassName="active-link" to="/view-source">View Source</NavLink></li>
                    </div>
                </div> 
                
                
                
                <li><NavLink activeClassName="active-link" to="/analysis">Analysis</NavLink></li>
            </ul>
        </div>
    );
    }
}

export default NavbarInstance;