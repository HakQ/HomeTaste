import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'
import axios from 'axios';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><font size = "12">Home<b>Taste</b></font></Link>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} componentClass={Link} href="calendarView" to="/CalendarView">
              PLANNER
            </NavItem>
          </Nav>
          <Nav>
            <NavItem eventKey={2} componentClass={Link} href="recipeForm" to="/RecipeForm">
              ADD RECIPE
            </NavItem>
          </Nav>
          <Nav>
            <NavItem eventKey={3} componentClass={Link} href="signUp" to="/signUp">
              SIGN UP
            </NavItem>
          </Nav>
          <Nav>
            <NavItem eventKey={4} componentClass={Link} href="signIn" to="/signIn">
              LOGIN
            </NavItem>
          </Nav>
          <Nav>
            <NavItem eventKey={5} componentClass={Link} href="signOut" to="/">
              LOGOUT
            </NavItem>
          </Nav>
      </Navbar>
    )
  }
}
  
