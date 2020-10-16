import React, { Component } from 'react';

class Testimonials extends Component {
  state = {
      backgroundImage: "./images/profile-image.jpg"
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <div className="testimonials">
        <div className="testimonialsInnerDiv">
          <div className="testimonialsImage" >
            <img src={this.state.backgroundImage} className="testimonial-img" alt="" />
          </div>
          <div><h5><b>Rohan Katariya</b></h5>Software Development Engineer</div>
          <div><h2>&#8220;</h2>This is test<h2>&#8221;</h2></div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
