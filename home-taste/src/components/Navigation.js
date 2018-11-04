import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

export default class Navigation extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">HomeTaste</Link>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/Planner" to="/Planner">
              Planner
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/SignIn" to="/SignIn">
              Sign In
            </NavItem>
          </Nav>
      </Navbar>
    )
  }
}
  
