import React, {Component} from 'react';
import './css/Contact.css';
import LogoWithText from './images/dejiojo_logo.png';
import { NavLink } from 'react-router-dom'

class Contact extends Component {
    render(){
        setTimeout(() => document.getElementById("loadingScreen").style.display = "none", 2000);
        return(
            <div className="contact-wrapper">
                <div className="contact-container">
                    <div className="hero-container">
                        <div className="content">
                            <div className="rowOne">
                                deigeedesigns@gmail.com
                            </div>
                            <div className="rowTwo">
                                ...or any of <span><NavLink to="/about" id="socialmedialink">my social media</NavLink></span> pages
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

export default Contact;