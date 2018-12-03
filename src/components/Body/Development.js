import React, {Component} from 'react';
import './css/Development.css';
import { NavLink } from 'react-router-dom';
import LogoImage from './images/portfolio/design/logo-image.jpg';
import WebDesignImage from './images/portfolio/design/web-design.jpg';
import BusCards from './images/portfolio/design/business-cards.jpg';
import Poster from './images/portfolio/design/poster.jpg';
import Misc from './images/portfolio/design/misc.jpg';

class Development extends Component {
    render(){
        setTimeout(() => document.getElementById("loadingScreen").style.display = "none", 2000);
        return(
            <div className="development-wrapper">
                <div className="development-container">
                    <div className="hero-container">
                        <div className="content">
                            <ul id="grid" className="clear">
                                
                                <li>
                                    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                                            <image href={LogoImage} x="-25" width="150" height="100" />
                                            </pattern>
                                        </defs>
                                        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" stroke="rgb(151,0,0)" stroke-width="1" fill="url(#img)"/>
                                    </svg>

                                    <svg className="overlay" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="overlay-polygon">
                                            <polygon points="50 -0.1 95 23 95 74 50 97.5 5 74 5 23" fill="rgba(151,0,0,.5)"/>
                                            <text className="text" x="29" y="53">Logos</text>
                                        </g>
                                    </svg>
                                </li>


                                <li>
                                    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="img2" patternUnits="userSpaceOnUse" width="100" height="100">
                                            <image href={WebDesignImage} x="-25" width="150" height="100" />
                                            </pattern>
                                        </defs>
                                        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" stroke="rgb(151,0,0)" stroke-width="1" fill="url(#img2)"/>
                                    </svg>

                                    <svg className="overlay" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="overlay-polygon">
                                            <polygon points="50 -0.1 95 23 95 74 50 97.5 5 74 5 23" fill="rgba(151,0,0,.5)"/>
                                            <text className="text" x="35" y="53">Web</text>
                                        </g>
                                    </svg>
                                </li>

                                <li>
                                    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="img3" patternUnits="userSpaceOnUse" width="100" height="100">
                                            <image href={BusCards} x="-25" width="150" height="100" />
                                            </pattern>
                                        </defs>
                                        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" stroke="rgb(151,0,0)" stroke-width="1" fill="url(#img3)"/>
                                    </svg>

                                    <svg className="overlay" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="overlay-polygon">
                                            <polygon points="50 -0.1 95 23 95 74 50 97.5 5 74 5 23" fill="rgba(151,0,0,.5)"/>
                                            <text className="text" x="15" y="50">Stationery</text>
                                        </g>
                                    </svg>
                                </li>


                                <li>
                                    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="img4" patternUnits="userSpaceOnUse" width="100" height="100">
                                            <image href={Poster} x="-25" width="150" height="100" />
                                            </pattern>
                                        </defs>
                                        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" stroke="rgb(151,0,0)" stroke-width="1" fill="url(#img4)"/>
                                    </svg>


                                    <svg className="overlay" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="overlay-polygon">
                                            <polygon points="50 -0.1 95 23 95 74 50 97.5 5 74 5 23" fill="rgba(151,0,0,.5)"/>
                                            <text className="text" x="30" y="53">Print</text>
                                        </g>
                                    </svg>
                                </li>

                                <li>
                                    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="img5" patternUnits="userSpaceOnUse" width="100" height="100">
                                            <image href={Misc} x="-25" width="150" height="100" />
                                            </pattern>
                                        </defs>
                                        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" stroke="rgb(151,0,0)" stroke-width="1" fill="url(#img5)"/>
                                    </svg>


                                    <svg className="overlay" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="overlay-polygon">
                                            <polygon points="50 -0.1 95 23 95 74 50 97.5 5 74 5 23" fill="rgba(151,0,0,.5)"/>
                                            <text className="text" x="33" y="53">Misc.</text>
                                        </g>
                                    </svg>
                                </li>
                            </ul>

                            <div className="return">
                                <h1><NavLink to="/portfolio" id="gallerylink"><div className="arrow-left"></div>return</NavLink></h1>
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

export default Development;