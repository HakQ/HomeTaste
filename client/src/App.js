import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
//import { index } from '.';
import Navigation from './components/Navigation';
import SignIn from './components/SignIn';
import Home from './components/Home';
import CalendarView from './components/CalendarView';
import RecipeForm from './components/recipeForm/RecipeForm';
import RecipePage from './components/recipeForm/RecipePage';
import SignUp from './components/SignUp';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      email: "",
      password: "",
      userId: null,
    }
  }

  onFirstChange = (e) => this.setState({firstName: e.target.value})
  onLastChange = (e) => this.setState({lastName: e.target.value})
  onUsernameChange = (e) => this.setState({username: e.target.value})
  onEmailChange = (e) => this.setState({email: e.target.value})
  onPasswordChange = (e) => this.setState({password:e.target.value})

  // setUserId = (id) => this.setState({userId:id})


  handleLogin = (e) =>{
    e.preventDefault();
    axios.post('/login',{
      email: this.state.email,
      password: this.state.password,
    })
    .then(res =>{
      this.setState({userId: res.data.userId})
    })
  }

  handleSignUp = (e) => 
  {
    e.preventDefault();
    axios.post('/signup', 
    {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    })
  }

  render() {
    return (  
      <Router>   
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/recipies/:eventId" component={RecipePage} exact />
        <Route path="/calendarView" component={CalendarView} />
        <Route path="/recipeForm" component={RecipeForm} />
        <Route path="/signIn" 
          render ={(routeProps) => <SignIn 
            onEmailChange={this.onEmailChange}  
            onPasswordChange={this.onPasswordChange}
            handleLogin={this.handleLogin}
            userId={this.state.userId}
            />}
          />
        <Route path="/signUp"
          render ={(routeProps) => <SignUp 
            onFirstChange={this.onFirstChange}  
            onLastChange={this.onLastChange}
            onUsernameChange={this.onUsernameChange}
            onEmailChange={this.onEmailChange}  
            onPasswordChange={this.onPasswordChange}
            handleSignUp={this.handleSignUp}
            userId={this.state.userId}
            />}
        />
      </div>
      </Router>
    
    );
  }
}

export default App;
