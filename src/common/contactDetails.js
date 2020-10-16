import React, { Component } from 'react';
import {FiShare2} from 'react-icons/fi';
import {AiTwotoneMail} from 'react-icons/ai';
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaSkype, FaPhoneAlt} from 'react-icons/fa';
import { Form } from 'react-bootstrap';

class ContactDetails extends Component {
  state = {
  }

  onChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  sendMailWithQuery = (details) => {
    details.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div className="contact">
        <div className="heading">Contact</div>
        <div className="contactDetails">
          <div className="outerDiv">
            <div className="social">
              <div className="shareIcon"><FiShare2 color="ffb727"/></div> 
              <div className="socialTitle">Social Profiles</div>
              <div className="socialProfilesIcons">
                <a href="https://www.linkedin.com/in/rohan-katariya-219806136"><div className="socialIcons"><FaLinkedin/> </div></a>
                <a href="https://www.facebook.com/rohan.katariya.37/"><div className="socialIcons"><FaFacebookF/> </div></a>
                <a href="https://www.instagram.com/_rohan_katariya"><div className="socialIcons"><FaInstagram/> </div></a>
                <a href="https://twitter.com/RohanKatariya"><div className="socialIcons"><FaTwitter/> </div></a>
                <a href="https://join.skype.com/invite/WbretrYukQGt"><div className="socialIcons"><FaSkype/> </div></a>
              </div>
            </div>
            <div className="personalContact">
              <a  className="email" href="mailTo:katariyarohan@yahoo.com">
                <div className="shareIcon"><AiTwotoneMail color="ffb727"/></div> 
                <div className="socialTitle">Email Me</div>
                <div>katariyarohan@yahoo.com</div>
              </a>
              <a className="phone" href="tel:7276134802">
                <div className="shareIcon"><FaPhoneAlt color="ffb727"/></div> 
                <div className="socialTitle">Call Me</div>
                <div>+91727613402</div>
              </a>
            </div>
          </div>
          <div className="outerDiv">
            <div className="contactForm">
              <Form onSubmit={this.sendMailWithQuery} className="form">
                  <div className="contacterDetails">
                    <div>
                      <input name="name" id="name" required placeholder="Your Name" onChange={this.onChangeHandler}/>
                    </div>
                    <div>
                      <input type="email" name="email" required id="email" placeholder="Your Email" onChange={this.onChangeHandler}/>
                    </div>
                  </div>
                  <div>
                    <input name="subject" id="subject" required placeholder="Subject" onChange={this.onChangeHandler}/>
                  </div>
                  <div>
                    <textarea name="message" id="message" required placeholder="Message For Me" onChange={this.onChangeHandler}/>
                  </div>
                  <div>
                    <button className="submitButton">Send Message</button>
                  </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
