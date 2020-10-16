import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectDetails from './common/projectDetails';
import Main from './common/main';

class App extends Component {
  constructor(props) {
    super(props);
    this.refAtt = React.createRef();
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <Router>
        <div className="flex-container">
          <Switch>
            <Route exact path="/projects/:id">
                <ProjectDetails />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
