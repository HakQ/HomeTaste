import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { index } from '.';
import Navigation from './components/Navigation';
import Planner from './components/Planner';
import SignIn from './components/SignIn';

class App extends Component {
  render() {
    return (  
      <Router>   
      <div className="App">
        <Navigation />
        <Route path="/planner" component={Planner} />
        <Route path="/signIn" component={SignIn} />
      </div>
      </Router>
    
    );
  }
}

export default App;
