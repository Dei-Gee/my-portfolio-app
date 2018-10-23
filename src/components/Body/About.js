import React, {Component} from 'react';
import './css/About.css';
import deji1 from './images/deji/deji1.jpg';
import deji2 from './images/deji/deji2.jpg';
import deji3 from './images/deji/deji3.jpg';


import githublogo from './images/icons/github_logo_color.png';
import linkedinlogo from './images/icons/linkedin_logo_color.png';
import instalogo from './images/icons/insta_logo.png';
import { NavLink } from 'react-router-dom';

class About extends Component {

    state = {
        loading : true
      };
    
      /*
      componentDidMount() {
         // simulates an async action, and hides the spinner
      }
      */



    render(){

        setTimeout(() => document.getElementById("loadingScreen").style.display = "none", 2000);

        const slideImages = [
            deji1,
            deji2,
            deji3
          ];

        const cycleImages = () => {
            for(var i=0; i<slideImages.length; i++)
            {
                return slideImages[i];
            }
        }

        return(
            <div className="about-wrapper">
                <div className="about-container">
                    <div className="about-hero-container">
                        <div className="mini-slideshow">
                            <img src={slideImages[0]} alt="pixs" />
                        </div>
                        <div className="info">
                            <div className="info-one">
                                <span>Deji Ojo</span>
                            </div>
                            <div className="info-two">
                                <span>Graphic Designer & Web Developer.</span>
                            </div>
                            <div className="info-three">
                                <span>
                                    I am a Vancouver based Freelancer with a passion for web development and graphic design. 
                                    I love biking, <br />archery, history and technology. Find out more about me by following me on social media.
                                </span>
                            </div>
                            <div className="info-four">
                                <a href="https://www.instagram.com/ebonyboydee/" title="follow me on instagram"><img id="logo1" src={instalogo} alt="instagram" /></a>
                                <a href="https://www.linkedin.com/in/deji-ojo/" title="connect with me on linkedin"><img id="logo2" src={linkedinlogo} alt="linkedin" /></a>
                                <a href="https://www.github.com/Dei-Gee/" title="check out my repositories"><img id="logo3" src={githublogo} alt="github" /></a>
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

export default About;