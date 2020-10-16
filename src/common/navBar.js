import React, { Component } from 'react';
import {FaList} from 'react-icons/fa';
import '../App.css';

class NavBar extends Component {
  state = {
    links: {
        "Home": "active", 
        "About Me": "", 
        "Skills": "", 
        "Projects": "", 
        "Resume": "", 
        "Hobbies": "", 
        "Contact": ""
    },
    mobileNavbarActive: false
  }
  onClickEvent = (e, onScroll=true) => {
    let linksYCordunates = window.innerWidth < 586 ? [0, 500, 1290, 1850, 2300, 4420, 5650] : [0, 400, 1000, 1500, 2100, 3100, 3900];
    let links = this.state.links;
    links[Object.keys(links).find(k => links[k] === "active")] = "";
    links[e] = "active";
    if(!onScroll) {
        window.scrollTo({left:0, top: linksYCordunates[Object.keys(links).indexOf(e)],   behavior: 'smooth'});
    }
    this.setState({links: links})
  }

  returnLinkDiv = () => {
    return Object.keys(this.state.links).map((key, index) => {
        let className = "navLink " + this.state.links[key];
        return <div className={className} key={index} onClick={() => this.onClickEvent(key, false)}><button>{key}</button></div>
    });
  }

  mobileNavbarOnClick = () => {
    this.setState({mobileNavbarActive: (this.state.mobileNavbarActive ? false : true)})
  }

  render() {
    return (
      <div>
        <div className={"navigation " + (window.innerWidth < 586  && this.state.mobileNavbarActive ? "navbarActive" : "")}>
            {this.returnLinkDiv()}
        </div>
            {window.innerWidth < 586 ? <div className="navigateButton" onClick={this.mobileNavbarOnClick}><FaList /></div> : ''}
      </div> 
);
  }
}

export default NavBar;
