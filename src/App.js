import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
//import { index } from '.';
import Navigation from './components/Navigation';
import SignIn from './components/SignIn';
import Home from './components/Home';
import CalendarView from './components/CalendarView';
import RecipeForm from './components/recipeForm/RecipeForm';
import Recipe from "./components/Recipe";


class App extends React.Component {
  state = {
    recipe: null
  }

  handleRecipe = (arr)=>{
    this.setState = arr
  }
  
  render() {
    return (  
      <Router>   
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/calendarView" component={CalendarView} />
        <Route path="/recipeForm" component={RecipeForm} />
        <Route path="/signIn" component={SignIn} />
        
        <Route path="/recipe/:id" component={Recipe} />
      </div>
      </Router>
    );
  }
}

export default App;
