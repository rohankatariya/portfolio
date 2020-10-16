import React, { Component } from 'react';
import Name from './name';
import NavBar from './navBar';
import AboutMe from './aboutMe';
import Skills from './Skills';
import Projects from './projects';
import Resume from './resume';
import Hobbies from './hobbies';
import ContactDetails from './contactDetails';
import Testimonials from './testimonials';

class Main extends Component {
  constructor(props) {
    super(props);
    this.refAtt = React.createRef();
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll);
  }


  onScroll = () => {
    let links = ["Home", "About Me", "Skills", "Projects", "Resume", "Hobbies", "Contact"];
    let linksYCordunates = window.innerWidth < 586 ? [340, 1000, 1600, 2000, 4200, 5350, 6000] : [300, 700, 1200, 1800, 3000, 3800, 4600];
    let scrollwdYCoordinates = document.documentElement.scrollTop;
    if(this.refAtt.current) {
      this.refAtt.current.onClickEvent(links[linksYCordunates.indexOf(linksYCordunates.find(x => x > scrollwdYCoordinates))]);
    }
  }
  render() {
    return (
        <div>
              <NavBar ref={this.refAtt}/>
              <div className="home"/>
              <Name />
              <AboutMe />
              <Skills />
              <Testimonials />
              <Projects />
              <Resume />
              <Hobbies />
              <ContactDetails />
              </div>
    );
  }
}

export default Main;
