import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { index } from '.';
import Navigation from './components/Navigation';
import Planner from './components/Planner';

class App extends Component {
  render() {
    return (  
      <Router>   
      <div className="App">
        <Navigation />
        <Route exact path="/Planner" Component={Planner} />
      </div>
      </Router>
    
    );
  }
}

export default App;
