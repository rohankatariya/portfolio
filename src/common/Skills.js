import React, { Component } from 'react';

class Skills extends Component {
  divideIntoBlocksOf2 = (items) => {  
    const result = new Array(Math.ceil(items.length / 2))
      .fill()
      .map(_ => items.splice(0, 2));
    
    return result.map((arr, index) => {
        return <div  key={index} className="skillInnerDiv">{arr}</div>
    })
  }

  getSkills = () => {
    let skillRatings = [
      ["HTML", 90],
      ["CSS", 90],
      ["NODEJS", 90],
      ["REACT", 80],
      ["AWS", 80],
      ["WORKDAY", 80],
      ["PYTHON", 75],
      ["JAVA", 50],
      ["JAVASCRIPT", 90],
      ["FREEMARKER", 80],
      ["TAPESTRY", 30],
      ["YUI", 20]
    ];
    return this.divideIntoBlocksOf2(skillRatings.sort((a, b) => b[1] - a[1]).map((key, index) => {
      return <div key={index} className="skill">
              <div className="skillTitle">
                <p style={{float: "left", fontSize: "15px"}}><b>{key[0]}</b></p>
                <p style={{float: "right", fontSize: "13px"}}><b>{key[1]}%</b></p>
              </div>
              <div className="rating">
                <div className="progressBar"><div className="percentageProgress" style={{"width": `${key[1]}%`}}></div></div>
              </div>  
          </div>
    }));
  }

  render() {
    return (
      <div id="skills" className="skills">
        <div className="heading">
            <h2>Skills</h2>
        </div>
        <div className="skillOuterDiv">
          {this.getSkills()}
        </div>
      </div>
    );
  }
}

export default Skills;
