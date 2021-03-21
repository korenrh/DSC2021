import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './index.jsx';
import ErrorPage from './components/pages/error.jsx';
import AboutPage from './components/pages/about.jsx';
import CreatePage from './components/pages/create.jsx';
import HowPage from './components/pages/how.jsx';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";


class App extends Component {
  render() {
    return (
    <Router> 
      <div className="App">
          <Navbar></Navbar>   
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create" component={CreatePage} />
        <Route exact path="/how" component={HowPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path= "/404/" component={ErrorPage}/>
        <Redirect to="/404/"/>
      </Switch>
    </Router>
    );
  }
}

export default App;
