import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FaDrum, FaGlassCheers, FaShoppingCart, FaPuzzlePiece, FaArrowLeft } from 'react-icons/fa';


class ProjectsDetails extends Component {
  state = {
    latestIndex: 0,
    projects : [{
      projectTitle: "BE Project",
      projectDesciption: "Online Event organization system using collaborative filtering method in Machine Learning",
      projectIcon: <FaGlassCheers size="3em" color="#ffb727"/>,
      projectId: "1",
      techonologiesUsed: {
        Platform		: ["Visual Studio (MVC Framework)"],
	      Language		: ["C#", "HTML", "CSS", "Python"],
	      Database		: ["SQL"]
      },
      projectImages: [{
          path: "../images/beProjectImages/1.png",
          alt: "Login Page"
        }, {
          path: "../images/beProjectImages/2.png",
          alt: "Select Cateogory"
        }, {
        path: "../images/beProjectImages/3.png",
        alt: "Recommendations for selected category"
      }],
      gitLink: "https://github.com/rohankatariya/BEProject",
      detaildeDescription: "A web application for recommending marriage and birthday halls, caters and decorations using similarities in between the users and the items. The item to item similarities are calculated using multiple user ratings and on the basis of that items with more similarities are provided to the user in the form of images and templates."
    },
    {
      projectTitle: "Zensar Training Project",
      projectDesciption: "Ecommerce Website for selling of products",
      projectIcon: <FaShoppingCart size="3em" color="#ffb727" />,
      projectId: "2",
      techonologiesUsed: {
        Platform		: ["Visual Studio (MVC Framework)"],
	      Language		: ["C#", "HTML", "CSS", "Python"],
	      Database		: ["SQL"]
      },
      gitLink: "https://github.com/rohankatariya/Ecommerce-Website",
      detaildeDescription: "The project is web application for purchasing the products, like amazon. You can select the items from different categories and add them to the cart. At the time of checkout, page will display all the products and some of the amount which is to be paid in the cart and after proceeding it will automatically redirect to payment gateways."
    },
    {
      projectTitle: "Crossword Application",
      projectDesciption: "An android app for the peoples interested in word puzzles.",
      projectIcon: <FaPuzzlePiece size="3em" color="#ffb727" />,
      projectId: "3",
      techonologiesUsed: {
        Platform		: ["Visual Studio (MVC Framework)"],
	      Language		: ["C#", "HTML", "CSS"],
	      Database		: ["SQL"]
      },
      gitLink: "",
      detaildeDescription: "Now a days, most of the personas use mobiles for reading the news. But they miss their hobby of solving the crossword puzzles in the newspaper. So for them we tried to develop an application will allow them to pursue their hobby. This project is based on Android studio."
    },
    {
      projectTitle: "Bothovon (Play the music using Robots)",
      projectDesciption: "Machine Playing the music for us!",
      projectIcon: <FaDrum size="3em" color="#ffb727" />,
      projectId: "4",
      projectVideo: "../videos/bothovon.mp4",
      techonologiesUsed: {
        Platform		: ["Atmel Studio", "XCTU", "AVR Studio"],
	      Language		: ["Embedded C", "Python"],
	      Hardware		: ["Firebird V", "Sharp IR sensors", "White line sensors", 
        "ZigBee modules", "Servo motors"]
      },
      gitLink: "",
      detaildeDescription: "In this project we were provided with the map and 2 robots. The objective was to find the shortest path using the shortest path algorithm which will allow the provided Robot to move along on the map.. The nearest robot will traverse the shortest path and will strike the pipes kept near those nodes accordingly which will create music. This process will continue till the end of the given destination array."
    },
    {
      projectTitle: "BE Project",
      projectDesciption: "Online Event organization system using collaborative filtering method in Machine Learning",
      projectIcon: <FaGlassCheers size="3em" color="#ffb727" />,
      projectId: "5",
      techonologiesUsed: {
        Platform		: ["Visual Studio (MVC Framework)"],
	      Language		: ["C#", "HTML", "CSS", "Python"],
	      Database		: ["SQL"]
      },
      gitLink: "",
      detaildeDescription: ""
    }],
    tabs: {
      overview: {
        className: "activeTab",
        display: true
      },
      details: {
        className: "",
        display: false
      },
      demo: {
        className: "",
        display: false
      }
    }
  }

  onTabClick = (event) => {
    let tabs = this.state.tabs;
    Object.keys(tabs).forEach(key => {
      console.log(tabs[key].className.includes('activeTab'))
      if(tabs[key].display) {
        tabs[key].className = tabs[key].className.replace('activeTab', '');
        tabs[key].display = false;
      }
    });
    tabs[event].className +=  'activeTab';
    tabs[event].display = true;
    this.setState({tabs: tabs});
  }

  getDetailsTab = (projectDetails) => {
    let techonologies = Object.keys(projectDetails.techonologiesUsed);
    return <div className="detailsTab">
      <div><h4>Git Link</h4> </div><a href={projectDetails.gitLink}>{projectDetails.gitLink}</a>
      <div>
        <h4>Technical Details</h4>
        {
          techonologies.map(key => {
            return <div className="tableFormat"><div className="column1">{key}:</div><div className="column2"><div><ul>{projectDetails.techonologiesUsed[key].map(item => {
              return <li>{item}</li>
            })}</ul></div></div></div>
          })
        }
      </div>
    </div>
  }

  getImages(images) {
    return <div>
      {
        images.map(key => {
          return <img className="projectImages" src={key.path} alt={key.alt} />
        })
      }
    </div>
  }

  render() {
    let projectDetails = this.state.projects.find(proj => proj.projectId === this.props.match.params.id);
    return (
      <div ref="Projects" className="projectInfo">

        <div className="projectHeading">
          <div>
            <Link className="link" to="/"><button className="backButton"><FaArrowLeft />Back</button></Link>
          </div>
          <div className="projectHeadingText">
            {projectDetails.projectTitle}
          </div> 
          <div></div>
        </div>
        <div className="projectTabs">
          <div className={this.state.tabs.overview.className} onClick={() => this.onTabClick("overview")}>Overview</div>
          <div className={this.state.tabs.details.className} onClick={() => this.onTabClick("details")}>Details</div>
          <div className={this.state.tabs.demo.className} onClick={() => this.onTabClick("demo")}>Demo Videos/Images</div>
        </div>
        <div className="projectDetailsPage">
          <div className="demo">
            {
              this.state.tabs.overview.display ? (projectDetails.detaildeDescription ? projectDetails.detaildeDescription : "")
               : "" 
            }
            {
              this.state.tabs.details.display ? (this.getDetailsTab(projectDetails)) : "" 
            }
            {
              this.state.tabs.demo.display ? (projectDetails.projectVideo ? 
              (<video width="`600`" autoPlay="true" controls>
              <source src={projectDetails.projectVideo} type="video/mp4" />
              </video>) : (projectDetails.projectImages ? this.getImages(projectDetails.projectImages) : "")): "" 
            }

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectsDetails);