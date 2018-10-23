import React, {Component} from 'react';
import './css/Home.css';
import LogoWithText from './images/dejiojo_logo.png';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render(){
        setTimeout(() => document.getElementById("loadingScreen").style.display = "none", 2000);
        return(
            <div className="home-wrapper">
                <div className="home-container">
                    <div className="hero-container">
                        <img src={LogoWithText} alt="logo" />
                        <span>Vancouver Based Graphic Designer and Web Developer. <NavLink id="knowmore" to="/about">Know more.</NavLink></span>
                    </div>
                </div>

                <div id="loadingScreen" className="loading-screen">
                    <div className="sk-cube-grid">
                        <div className="sk-cube sk-cube1"></div>
                        <div className="sk-cube sk-cube2"></div>
                        <div className="sk-cube sk-cube3"></div>
                        <div className="sk-cube sk-cube4"></div>
                        <div className="sk-cube sk-cube5"></div>
                        <div className="sk-cube sk-cube6"></div>
                        <div className="sk-cube sk-cube7"></div>
                        <div className="sk-cube sk-cube8"></div>
                        <div className="sk-cube sk-cube9"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;