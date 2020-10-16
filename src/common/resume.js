import React, { Component } from 'react';

class Resume extends Component {

  getresumeContentBlock = (data) => {
    return data.map((key, index) => {
      return <div key={index} className="resumeContent">
      <h5>{key.title}</h5>
      <h6>{key.year}</h6>
      <p><em>{key.location}</em></p>
      <ul>{key.detailList.map((detail, index) => {return <li key={index}>{detail}</li>})}</ul>
    </div>
    })
  }

  getEducationDetails = () => {
    let data = [{
      title: "Bachelor of Engineering [BE] (Computer Engineering)",
      year: "2014 - 2018",
      location: "Marathwada Mitra Mandals College Of Engineering, Pune",
      detailList: [
        "Completed my degree in Computer engineering with aggregate of 68.45%.",
        "In this course, I was involved in various activies like E-Yantra(Robotics compitition held my IIT, Bombay), NSS.",
        "In these fiscal years, We built different projects for showcasing our talent."
      ]
    }, {
      title: "Maharashtra State Board HSC examination",
      year: "2012 - 2014",
      location: "Mahatma Gandhi Vidyalay, Karmala, Solapur, Maharashtra",
      detailList: [
        "Completed my higher secondary eduction with 72.77% aggregate.",
        "I was involved in various activity related to IT field."
      ]
    }, {
      title: "Maharashtra State Board SSC examination",
      year: "2002 - 2012",
      location: "Annasaheb Jagtap Mahavidyalay, Karmala, Solapur",
      detailList: [
        "Completed my primary education with 84.55%."
      ]
    }];
    return this.getresumeContentBlock(data);
  }

  getProfessionalExperianceDetails = () => {
    let data = [{
      title: "Software Development Engineer",
      year: "2019 - Present",
      location: "Emtec Inc, Pune, Maharashtra, India",
      detailList: [
        "Worked on different Apps in different technologies like Workday, AWS, React.",
        "Worked in teams to provide best solution to our client.",
        "Completed the requirements well before the timeline."
      ]
    }, {
      title: "Associate Software development Engineer",
      year: "2018 - 2019",
      location: "Emtec Inc, Pune, Maharashtra, India",
      detailList: [
        "Developed different features in different languages for the end clients.",
        "Worked in different languages like Java, Python, Tapestry, Freemarker.",
        "Worked in teams to provide best solution to our client.",
        "Completed the requirements well before the timeline."
      ]
    }];
    return this.getresumeContentBlock(data);
  }
  render() {
    return (
      <div className="resume">
        <div className="heading">
            <h2>Resume</h2>
        </div>
        <div className="summary">Innovative and deadline-driven Software Developer with 2+ years of experience designing and developing user-centered web applications from initial concept to final, polished deliverable.</div>
        <div className="resumeDetails">
          <div className="innerResumeBox">
            <div className="resumeTitle"><b>Professional Experience</b></div>
            {this.getProfessionalExperianceDetails()}
          </div>
          <div className="innerResumeBox">
            <div className="resumeTitle"><b>Education Details</b></div>
            {this.getEducationDetails()}
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
