import React, { Component } from 'react';
import { FaHandPointRight, FaRegClock, FaLaptop } from 'react-icons/fa';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { GiTrophy } from 'react-icons/gi';

import axios from 'axios';

class AboutMe extends Component {
  state = {
    persons: []
  }

  getDetailInfoDiv = () => {

    let personalDetails = {
        Name : "Rohan Katariya",
        Email: "katariyarohan@yahoo.com",
        Website: "Coming Soon",
        Age: new Date().getFullYear() - new Date("04/21/1997").getFullYear(),
        Degree: "Bachelor of Engineering",
        Phone: "+917276134802",
        Freelance:  "Available",
        City: "Pune, India"
    };

    let items = Object.keys(personalDetails).map((key, index) => {
            return  <div className="detailInfo" key={index}>
                        <FaHandPointRight color="#ffb727" key={index} />
                        <span className="detailInfoTitle" key={index}>{key} </span>
                        <span className="detailInfoDesc" key={index}>: {personalDetails[key]}</span>
                    </div>
    });
    return this.divideIntoBlocksOf2(items, "detail");

  }
  componentDidMount() {
  
     axios.get("https://peopletech.enterprise-workday-dev.zg-int.net/getEmployeeDetails/v-arpitj@zillowgroup.com", {
                    "x-api-key": "ZOUv36ZcVM8HDPICyeF7a3fGRZSyUHPy2D8uh2C9",
                    "Access-Control-Allow-Origin": "*"
                }).then(res => console.log(res.data)).catch(e => console.log(e));
  }
  getOtherDetailsDiv = () => {
    let otherDetails = [
      {
        icon: <FaRegClock color="#8a1ac2" size="3em"/>,
        iconColor: "#8a1ac2",
        title: "2",
        description: <p>Years of <b>Industry experience</b></p>
      },
      {
        icon: <RiEmotionHappyLine color="lightgreen" size="3em"/>,
        iconColor: "blue",
        title: "1",
        description: <p>No. of <b>Happy Companies</b> worked with</p>
      },
      {
        icon: <FaLaptop color="skyblue" size="3em"/>,
        title: "6",
        description: <p><b>Projects</b> On which i have worked on</p>
      },
      {
        icon: <GiTrophy color="#ffb727" size="3em"/>,
        iconColor: "#8a1ac2",
        title: "3",
        description: <p>No. of <b>awards</b></p>
      }
    ]
    let items = otherDetails.map( (key, index) => {
        return <div className="detailInfo" key={index}>
              <div className="otherDetailsIcon">
                {key.icon}
              </div>
              <div className="otherDetailsDesc">
                <div><b key={index}>{key.title}</b></div>
                <div>{key.description}</div>
              </div>
            </div>
    });

    return this.divideIntoBlocksOf2(items, "otherDetail");
  } 

  divideIntoBlocksOf2 = (items, className) => {  
    const result = new Array(Math.ceil(items.length / 2))
      .fill()
      .map(_ => items.splice(0, 2));
    
    return result.map((arr, index) => {
        return <div key={index} className={className}>{arr}</div>
    })
  }

  render() {
    return (
      <div className="aboutMe">

        <div className="details">
            <div className="profileDetails">
            <div className="heading">
            <h2>About Me</h2>
        </div>
        A Full stack Developer | Freelancer who intends to build a career with leading corporate of hi-tech environment with committed & dedicated people, which will help me to explore myself fully and realize my potential.
                {this.getOtherDetailsDiv()}
            </div>
            <div className="profileImage"></div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
