import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Categories from "./components/Categories";
import SchoolClasses from "./components/SchoolClasses";
import Blocks from "./components/Blocks";
import Students from "./components/Students";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/categories" component={Categories}/>
              <Route path="/classes" component={SchoolClasses}/>
              <Route path="/students" component={Students}/>
              <Route path="/blocks" component={Blocks}/>
              <Route component={Error}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
