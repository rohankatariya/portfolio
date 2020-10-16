import React, { Component } from 'react';
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaSkype} from 'react-icons/fa';
import '../App.css';

class Name extends Component {

  render() {
    return (
      <div id="home" className="nameContainer">
            <div className="nameBox">
                <div className="name">
                    <h1 style={{fontSize: "50px"}}>I'm<br />Rohan Katariya</h1><br />
                </div>
                <div className="profession">
                    <b>A Software Developer</b>
                </div>
                <div className="socialProfilesIcons">
                <a href="https://www.linkedin.com/in/rohan-katariya-219806136"><div className="socialIcons"><FaLinkedin/> </div></a>
                <a href="https://www.facebook.com/rohan.katariya.37/"><div className="socialIcons"><FaFacebookF/> </div></a>
                <a href="https://www.instagram.com/_rohan_katariya"><div className="socialIcons"><FaInstagram/> </div></a>
                <a href="https://twitter.com/RohanKatariya"><div className="socialIcons"><FaTwitter/> </div></a>
                <a href="https://join.skype.com/invite/WbretrYukQGt"><div className="socialIcons"><FaSkype/> </div></a>
              </div>
            </div>
      </div>
    );
  }
}

export default Name;
