import React, { Component } from 'react'
import logo from '../../logo.svg';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="header-container">
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="nav-container">
                    <div className="links-container">
                        <div className="nav-div">
                            <NavLink className="links" to="/">Home</NavLink>
                            <div className="bottom"></div>
                        </div>
                        <div className="nav-div">
                            <NavLink className="links" to="/about">About</NavLink>
                            <div className="bottom"></div>
                        </div>
                        <div className="nav-div">
                            <NavLink className="links" to="/portfolio">Portfolio</NavLink>
                            <div className="bottom"></div>
                        </div>
                        <div className="nav-div" id="last">
                            <NavLink className="links" to="/">Contact</NavLink>
                            <div className="bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;