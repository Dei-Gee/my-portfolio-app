import React, {Component} from 'react';
import './css/Portfolio.css';
import LogoWithText from './images/dejiojo_logo.png';
import { NavLink } from 'react-router-dom';

class Portfolio extends Component {
    render(){
        setTimeout(() => document.getElementById("loadingScreen").style.display = "none", 2000);
        return(
            <div classname="portfolio-wrapper">
                <div className="portfolio-container">
                    <div className="hero-container">
                        <div className="content">
                            <div className="design">
                                <h1>Design</h1>
                            </div>

                            <div className="development">
                                <h1>Development</h1>
                            </div>
                        </div>
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

export default Portfolio;