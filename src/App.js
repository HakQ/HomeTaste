import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
//import { index } from '.';
import Navigation from './components/Navigation';
import SignIn from './components/SignIn';
import Home from './components/Home';
import CalendarView from './components/CalendarView';

class App extends Component {
  render() {
    return (  
      <Router>   
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/calendarView" component={CalendarView} />
        <Route path="/signIn" component={SignIn} />
      </div>
      </Router>
    
    );
  }
}

export default App;
