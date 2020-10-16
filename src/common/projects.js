import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaDrum, FaGlassCheers, FaShoppingCart, FaPuzzlePiece, FaGreaterThan, FaLessThan } from 'react-icons/fa';


class Projects extends Component {
  state = {
    latestIndex: 0,
    projects : [{
      projectTitle: "BE Project",
      projectDesciption: "Online Event organization system using collaborative filtering method in Machine Learning",
      projectIcon: <FaGlassCheers size="3em" color="#ffb727"/>,
      projectId: "1"
    },
    {
      projectTitle: "Zensar Training Project",
      projectDesciption: "Ecommerce Website for selling of products",
      projectIcon: <FaShoppingCart size="3em" color="#ffb727" />,
      projectId: "2"
    },
    {
      projectTitle: "Crossword Application",
      projectDesciption: "An android app for the peoples interested in word puzzles.",
      projectIcon: <FaPuzzlePiece size="3em" color="#ffb727" />,
      projectId: "3"
    },
    {
      projectTitle: "Bothovon (Play the music using Robots)",
      projectDesciption: "Machine Playing the music for us!",
      projectIcon: <FaDrum size="3em" color="#ffb727" />,
      projectId: "4"
    },
    {
      projectTitle: "BE Project",
      projectDesciption: "Online Event organization system using collaborative filtering method in Machine Learning",
      projectIcon: <FaGlassCheers size="3em" color="#ffb727" />,
      projectId: "4"
    }]
  }

  greaterClick = () => {
    let latestIndex = this.state.latestIndex + (window.innerWidth < 586 ? 1 : 3);
    latestIndex = latestIndex > this.state.projects.length - 1 ? this.state.projects.length - 4 : latestIndex;
    this.setState({latestIndex: latestIndex});
  }

  lesserClick = () => {
    let latestIndex = this.state.latestIndex - (window.innerWidth < 586 ? 1 : 3);
    latestIndex = latestIndex < 0 ? 0 : latestIndex;
    this.setState({latestIndex: latestIndex});
  }

  getProjects = () => {
    let project = this.state.projects.slice(this.state.latestIndex, this.state.latestIndex + (window.innerWidth < 586 ? 1 : 3));
    return project.map( (key, index) => {
      return <Link key={index} to={"/projects/" + key.projectId} className="projectBox link">
                <div>
                  <div className="projectIcon"> {key.projectIcon} </div>
                  <div className="projectDetail">
                    <h5>{key.projectTitle}</h5>
                    <p>{key.projectDesciption}</p> 
                  </div>
                </div>
            </Link>});
  }

  render() {
    return (
      <div className="projects">
        <div className="heading">
            <h2>My Projects</h2>
        </div>
        <div className="projectDetails">
            <div className="lessgreaterSymbol"><button className="lessgreaterbutton" onClick={() => {this.lesserClick()}} disabled={this.state.latestIndex ===  0}><FaLessThan size="1em"/></button></div>
            <div className="projectsBox">
              {this.getProjects()}
            </div>
            <div className="lessgreaterSymbol"><button className="lessgreaterbutton" onClick={() => {this.greaterClick()}} disabled={(this.state.latestIndex + 3) >  this.state.projects.length}><FaGreaterThan size="1em"/></button></div>
        </div>
      </div>
    );
  }
}

export default Projects;
