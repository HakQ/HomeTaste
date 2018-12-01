import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

export default class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">HomeTaste</Link>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} componentClass={Link} href="calendarView" to="/CalendarView">
              Planner
            </NavItem>
            </Nav>
            <Nav>
            <NavItem eventKey={2} componentClass={Link} href="signIn" to="/signIn">
              Sign In
            </NavItem>
          </Nav>
      </Navbar>
    )
  }
}
  
